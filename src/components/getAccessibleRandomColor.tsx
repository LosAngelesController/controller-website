const MINIMUM_CONTRAST_RATIO = 3;

const srgbChannelToLinear = (channel: number): number => {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

const getRelativeLuminance = (r: number, g: number, b: number): number =>
  0.2126 * srgbChannelToLinear(r) +
  0.7152 * srgbChannelToLinear(g) +
  0.0722 * srgbChannelToLinear(b);

const getContrastRatio = (lum1: number, lum2: number): number => {
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
};

const meetsContrastRequirements = (r: number, g: number, b: number): boolean => {
  const luminance = getRelativeLuminance(r, g, b);
  const contrastWithWhite = getContrastRatio(luminance, 1);
  const contrastWithBlack = getContrastRatio(luminance, 0);
  return (
    contrastWithWhite >= MINIMUM_CONTRAST_RATIO &&
    contrastWithBlack >= MINIMUM_CONTRAST_RATIO
  );
};

const FALLBACK_COLOR: [number, number, number] = [64, 120, 192];

// Generates colors that remain readable on both light and dark backgrounds.
export const getAccessibleRandomColor = (): string => {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    if (meetsContrastRequirements(r, g, b)) {
      return `rgb(${r}, ${g}, ${b})`;
    }
  }

  const [r, g, b] = FALLBACK_COLOR;
  return `rgb(${r}, ${g}, ${b})`;
};

export default getAccessibleRandomColor;
