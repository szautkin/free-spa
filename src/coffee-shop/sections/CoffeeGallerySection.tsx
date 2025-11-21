import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
  Dialog,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useContent, coffeeAssets, coffeeTheme } from '../../config';

const CoffeeGallerySection = () => {
  const coffeeContent = useContent();
  const { gallery } = coffeeContent;
  const { gallery: galleryAssets } = coffeeAssets;
  const { colors, spacing, borderRadius, shadows, animations } = coffeeTheme;

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
  };

  const filteredImages =
    activeCategory === 'All'
      ? galleryAssets.images
      : galleryAssets.images.filter((img) => img.category === activeCategory);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: spacing['3xl'], md: spacing['5xl'] },
        backgroundColor: colors.background.light,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: spacing['2xl'] }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.secondary.main,
              fontWeight: coffeeTheme.typography.fontWeight.semibold,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {gallery.sectionTitle}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: coffeeTheme.typography.fontFamily.heading,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: coffeeTheme.typography.fontWeight.bold,
              color: colors.text.primary,
              mt: spacing.sm,
              mb: spacing.md,
            }}
          >
            {gallery.subtitle}
          </Typography>
        </Box>

        {/* Category Tabs */}
        <Box
          sx={{
            mb: spacing.xl,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            value={activeCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: coffeeTheme.typography.fontWeight.semibold,
                color: colors.text.secondary,
                px: spacing.lg,
                py: spacing.sm,
                transition: `all ${animations.duration.fast}ms ${animations.easing.easeInOut}`,
                '&:hover': {
                  color: colors.secondary.main,
                },
                '&.Mui-selected': {
                  color: colors.secondary.main,
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: colors.secondary.main,
                height: '3px',
                borderRadius: '3px 3px 0 0',
              },
            }}
          >
            {gallery.categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Image Gallery */}
        <ImageList
          variant="masonry"
          cols={window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3}
          gap={16}
          sx={{
            overflow: 'visible',
          }}
        >
          {filteredImages.map((image) => (
            <ImageListItem
              key={image.id}
              sx={{
                cursor: 'pointer',
                borderRadius: borderRadius.lg,
                overflow: 'hidden',
                boxShadow: shadows.base,
                transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: shadows.xl,
                },
              }}
              onClick={() => handleImageClick(image.src)}
            >
              <Box
                component="img"
                src={image.thumbnail || image.src}
                alt={image.alt}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback to placeholder image if the configured image fails to load
                  target.src = '/assets/coffee/images/placeholder.jpg';
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* Image Dialog */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: -50,
              right: 0,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage || ''}
            alt="Full size image"
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: borderRadius.lg,
              boxShadow: shadows['2xl'],
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default CoffeeGallerySection;
