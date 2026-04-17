import * as React from 'react';

/*
  a11y + correctness notes:

  The original module maintained theme state in localStorage only. React
  components had no way to know the current theme, so aria-pressed on
  theme toggles was broken (always false).

  This rewrite:
  1. Exposes `currentColour` ('light' | 'dark' | 'system') on the context,
     so toggles can reflect the active theme to assistive tech.
  2. Uses React state + provider so consumers re-render when theme changes.
  3. Listens for OS-level prefers-color-scheme changes while in 'system'
     mode, so a user who chose "System" for accessibility reasons gets
     live updates when they change their OS setting.
  4. Applies the 'dark' class on <html> (Tailwind's default selector).
  5. SSR-safe: no localStorage/matchMedia reads during render.

  Consumers:
    const theme = React.useContext(ThemeContext);
    theme.currentColour   // 'light' | 'dark' | 'system'
    theme.makeLight()
    theme.makeDark()
    theme.makeSystem()
    theme.updateSystem()  // re-applies DOM classes; rarely needed externally
*/

export type ThemeValue = 'light' | 'dark' | 'system';

interface ThemeChanger {
  currentColour: ThemeValue;
  makeLight: () => void;
  makeDark: () => void;
  makeSystem: () => void;
  updateSystem: () => void;
}

const STORAGE_KEY = 'theme';

function readStoredTheme(): ThemeValue {
  if (typeof window === 'undefined') return 'system';
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === 'light' || raw === 'dark') return raw;
    return 'system';
  } catch {
    // localStorage can throw in private browsing / disabled storage.
    return 'system';
  }
}

function prefersDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyDomClasses(theme: ThemeValue) {
  if (typeof document === 'undefined') return;

  const isDark = theme === 'dark' || (theme === 'system' && prefersDark());
  const html = document.documentElement;
  const body = document.body;

  if (isDark) {
    html.classList.add('dark');
    body?.classList.add('dark');
    body?.classList.add('dark:bg-bruhdark');
  } else {
    html.classList.remove('dark');
    body?.classList.remove('dark');
    // Leave dark:bg-bruhdark on body; Tailwind's dark: variant gates it
    // on the `dark` class, so it becomes inert without being removed.
  }
}

// Default export value for the context when no provider is mounted.
// Consumers that read before the provider mounts get sensible no-ops.
const defaultThemeChanger: ThemeChanger = {
  currentColour: 'system',
  makeLight: () => undefined,
  makeDark: () => undefined,
  makeSystem: () => undefined,
  updateSystem: () => undefined,
};

export const ThemeContext =
  React.createContext<ThemeChanger>(defaultThemeChanger);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start in 'system' for SSR consistency; read real value after mount.
  const [currentColour, setCurrentColour] =
    React.useState<ThemeValue>('system');

  // Sync from localStorage on mount and apply DOM classes.
  React.useEffect(() => {
    const stored = readStoredTheme();
    setCurrentColour(stored);
    applyDomClasses(stored);
  }, []);

  // When in 'system' mode, listen for OS-level preference changes so the
  // page updates live. Important for users who rely on OS dark mode for
  // vision/photophobia reasons.
  React.useEffect(() => {
    if (currentColour !== 'system') return;
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyDomClasses('system');

    // addEventListener on MediaQueryList is the modern API;
    // older Safari needs addListener.
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    } else {
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }
  }, [currentColour]);

  const write = React.useCallback((next: ThemeValue) => {
    try {
      if (next === 'system') {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, next);
      }
    } catch {
      // ignore storage failures
    }
    setCurrentColour(next);
    applyDomClasses(next);
  }, []);

  const value = React.useMemo<ThemeChanger>(
    () => ({
      currentColour,
      makeLight: () => write('light'),
      makeDark: () => write('dark'),
      makeSystem: () => write('system'),
      updateSystem: () => applyDomClasses(currentColour),
    }),
    [currentColour, write]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/*
  Pre-hydration script: inlined in <Head> of _document.tsx, this sets the
  'dark' class before React mounts so the page doesn't flash light-to-dark.
  Export it so _document can drop it in verbatim.
*/
export const themePreHydrationScript = `
(function(){try{
  var t = localStorage.getItem('${STORAGE_KEY}');
  var isDark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) { document.documentElement.classList.add('dark'); }
}catch(e){}})();
`;
