import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useContent, coffeeAssets, coffeeTheme } from '../../config';

const CoffeeAboutSection = () => {
  const coffeeContent = useContent();
  const { about } = coffeeContent;
  const { about: aboutAssets } = coffeeAssets;
  const { colors, spacing, borderRadius, shadows, animations } = coffeeTheme;

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: spacing['3xl'], md: spacing['5xl'] },
        backgroundColor: colors.background.light,
      }}
    >
      <Container maxWidth="lg">
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
            {about.sectionTitle}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: coffeeTheme.typography.fontFamily.heading,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: coffeeTheme.typography.fontWeight.bold,
              color: colors.text.primary,
              mt: spacing.sm,
            }}
          >
            {about.heading}
          </Typography>
        </Box>

        {/* Main Content Grid */}
        <Grid container spacing={4} sx={{ mb: spacing['3xl'] }}>
          {/* Story Content */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.lg,
                height: '100%',
                justifyContent: 'center',
              }}
            >
              {about.story.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: colors.text.secondary,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Main Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '300px', sm: '400px', md: '100%' },
                minHeight: { md: '500px' },
                borderRadius: borderRadius['2xl'],
                overflow: 'hidden',
                boxShadow: shadows.xl,
              }}
            >
              <Box
                component="img"
                src={aboutAssets.mainImage}
                alt="About our coffee shop"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: `transform ${animations.duration.slow}ms ${animations.easing.easeOut}`,
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback to placeholder image if the configured image fails to load
                  target.src = '/assets/coffee/images/placeholder.jpg';
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Highlights Grid */}
        <Grid container spacing={3}>
          {about.highlights.map((highlight, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: colors.background.paper,
                  borderRadius: borderRadius.xl,
                  boxShadow: shadows.md,
                  transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: shadows.xl,
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: spacing.xl,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: spacing.md,
                  }}
                >
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: colors.secondary.light,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: spacing.md,
                    }}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: colors.secondary.main,
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: coffeeTheme.typography.fontWeight.bold,
                      color: colors.text.primary,
                      fontSize: '1.25rem',
                    }}
                  >
                    {highlight.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.text.secondary,
                      lineHeight: 1.6,
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Gallery Images */}
        {aboutAssets.galleryImages && aboutAssets.galleryImages.length > 0 && (
          <Box sx={{ mt: spacing['3xl'] }}>
            <Grid container spacing={2}>
              {aboutAssets.galleryImages.map((image, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '100%',
                      borderRadius: borderRadius.lg,
                      overflow: 'hidden',
                      boxShadow: shadows.base,
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: `transform ${animations.duration.normal}ms ${animations.easing.easeOut}`,
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Fallback to placeholder image if the configured image fails to load
                        target.src = '/assets/coffee/images/placeholder.jpg';
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CoffeeAboutSection;
