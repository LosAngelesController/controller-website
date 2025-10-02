import * as React from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function NewTranslate() {
  const AttrRemovedRef = React.useRef(false);

  const removeAttribution = () => {
    const topTranslateElement = document.querySelector(
      '#google_translate_element'
    ) as HTMLElement | null;

    if (topTranslateElement && !AttrRemovedRef.current) {
      if (topTranslateElement.innerText.includes('Powered by')) {
        AttrRemovedRef.current = true;
      }
    }
  };

  React.useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('#google-translate-script')) {
      window.googleTranslateElementInit = () => {
        // Check if widget already exists
        if (!document.querySelector('#google_translate_element select')) {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        removeAttribution();
      };
      script.onerror = () => {
        console.error('Failed to load Google Translate script.');
      };
      document.body.appendChild(script);
    } else {
      // If script is already present, re-initialize widget only if needed
      if (
        window.google &&
        window.google.translate &&
        !document.querySelector('#google_translate_element select')
      ) {
        window.googleTranslateElementInit();
      }
    }

    return () => {
      // We no longer remove the script to prevent double inserts
    };
  }, []);

  return (
    <div id='googleparent' suppressHydrationWarning={true}>
      <div id='google_translate_element' suppressHydrationWarning={true}></div>
    </div>
  );
}
