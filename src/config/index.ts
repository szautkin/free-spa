/**
 * Configuration exports
 *
 * This file centralizes all configuration imports for easy access throughout the application.
 */

export { mechanicShopTheme as coffeeTheme, type ThemeConfig } from './theme.config';
export { mechanicShopContent as coffeeContent, type ContentConfig } from './content.config';
export { mechanicShopAssets as coffeeAssets, type AssetsConfig, getImagePath, getImageWithFallback } from './assets.config';
export { useContent } from './useContent';

// Re-export commonly used types
export type { ThemeColors, ThemeTypography, ThemeSpacing } from './theme.config';
export type { HeroContent, AboutContent, MenuContent, MenuItem } from './content.config';
export type { HeroAssets, GalleryAssets, BrandAssets } from './assets.config';
