import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useContent, coffeeAssets, coffeeTheme } from '../../config';

const CoffeeHeroSection = () => {
  const coffeeContent = useContent();
  const { hero } = coffeeContent;
  const { hero: heroAssets } = coffeeAssets;
  const { colors, spacing, animations } = coffeeTheme;

  const handleCtaClick = (link: string) => {
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroAssets.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        color: colors.primary.contrastText,
        overflow: 'hidden',
      }}
    >
      {/* Overlay Pattern */}
      {heroAssets.overlayPattern && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroAssets.overlayPattern})`,
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        />
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            animation: `fadeInUp ${animations.duration.slow}ms ${animations.easing.easeOut}`,
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(30px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          {/* Logo */}
          {heroAssets.logoImage && (
            <Box
              component="img"
              src={heroAssets.logoImage}
              alt={hero.title}
              sx={{
                maxWidth: '200px',
                height: 'auto',
                mb: spacing.lg,
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
              }}
            />
          )}

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: coffeeTheme.typography.fontFamily.heading,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
              fontWeight: coffeeTheme.typography.fontWeight.bold,
              mb: spacing.md,
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              letterSpacing: coffeeTheme.typography.letterSpacing.tight,
            }}
          >
            {hero.title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: coffeeTheme.typography.fontFamily.accent,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: coffeeTheme.typography.fontWeight.normal,
              mb: spacing.md,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
              opacity: 0.95,
            }}
          >
            {hero.subtitle}
          </Typography>

          {/* Tagline */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontWeight: coffeeTheme.typography.fontWeight.normal,
              mb: spacing.xl,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
              opacity: 0.9,
            }}
          >
            {hero.tagline}
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={spacing.md}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => handleCtaClick(hero.ctaButtons.primary.link)}
              sx={{
                backgroundColor: colors.secondary.main,
                color: colors.secondary.contrastText,
                px: spacing.xl,
                py: spacing.md,
                fontSize: '1.125rem',
                fontWeight: coffeeTheme.typography.fontWeight.semibold,
                borderRadius: coffeeTheme.borderRadius.lg,
                textTransform: 'none',
                boxShadow: coffeeTheme.shadows.lg,
                transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                '&:hover': {
                  backgroundColor: colors.secondary.dark,
                  transform: 'translateY(-2px)',
                  boxShadow: coffeeTheme.shadows.xl,
                },
              }}
            >
              {hero.ctaButtons.primary.text}
            </Button>

            {hero.ctaButtons.secondary && (
              <Button
                variant="outlined"
                size="large"
                // Use optional chaining to safely access secondary button link
                onClick={() => hero.ctaButtons.secondary && handleCtaClick(hero.ctaButtons.secondary.link)}
                sx={{
                  borderColor: colors.primary.contrastText,
                  color: colors.primary.contrastText,
                  px: spacing.xl,
                  py: spacing.md,
                  fontSize: '1.125rem',
                  fontWeight: coffeeTheme.typography.fontWeight.semibold,
                  borderRadius: coffeeTheme.borderRadius.lg,
                  borderWidth: 2,
                  textTransform: 'none',
                  transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: colors.secondary.main,
                    backgroundColor: colors.secondary.main,
                    color: colors.secondary.contrastText,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {hero.ctaButtons.secondary.text}
              </Button>
            )}
          </Stack>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: spacing.xl, md: spacing['2xl'] },
          left: { xs: '50%', md: 'auto' },
          right: { xs: 'auto', md: spacing['2xl'] },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          animation: 'bounce 2s infinite',
          zIndex: 10,
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: { xs: 'translateX(-50%) translateY(0)', md: 'translateY(0)' },
            },
            '40%': {
              transform: { xs: 'translateX(-50%) translateY(-10px)', md: 'translateY(-10px)' },
            },
            '60%': {
              transform: { xs: 'translateX(-50%) translateY(-5px)', md: 'translateY(-5px)' },
            },
          },
        }}
      >
        <Box
          sx={{
            width: '30px',
            height: '50px',
            border: `2px solid ${colors.primary.contrastText}`,
            borderRadius: '20px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: colors.primary.contrastText,
              animation: 'scrollDown 2s infinite',
            },
            '@keyframes scrollDown': {
              '0%': {
                top: '8px',
                opacity: 1,
              },
              '100%': {
                top: '30px',
                opacity: 0,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CoffeeHeroSection;
