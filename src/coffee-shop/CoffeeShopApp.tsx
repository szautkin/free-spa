import { Box } from '@mui/material';
import CoffeeHeroSection from './sections/CoffeeHeroSection';
import CoffeeAboutSection from './sections/CoffeeAboutSection';
import CoffeeMenuSection from './sections/CoffeeMenuSection';
import CoffeeGallerySection from './sections/CoffeeGallerySection';
import CoffeeLocationSection from './sections/CoffeeLocationSection';
import CoffeeFooter from './components/CoffeeFooter';
import LanguageToggle from '../components/LanguageToggle';

/**
 * Coffee Shop Single Page Application
 *
 * This is the main component for the coffee shop SPA.
 * All sections are rendered in order to create a cohesive single-page experience.
 *
 * Configuration:
 * - Theme settings: src/config/theme.config.ts
 * - Content: src/config/content.config.ts
 * - Assets: src/config/assets.config.ts
 */
const CoffeeShopApp = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Floating Language Toggle */}
      <Box
        sx={{
          position: 'fixed',
          top: { xs: '16px', sm: '24px' },
          right: { xs: '16px', sm: '24px' },
          zIndex: 1000,
        }}
      >
        <LanguageToggle />
      </Box>

      {/* Hero Section - Full viewport height with background image */}
      <CoffeeHeroSection />

      {/* About Section - Story, highlights, and gallery */}
      <CoffeeAboutSection />

      {/* Menu Section - Categorized menu with tabs */}
      <CoffeeMenuSection />

      {/* Gallery Section - Photo gallery with filters */}
      <CoffeeGallerySection />

      {/* Location Section - Address, hours, and contact */}
      <CoffeeLocationSection />

      {/* Footer - Links and additional info */}
      <CoffeeFooter />
    </Box>
  );
};

export default CoffeeShopApp;
