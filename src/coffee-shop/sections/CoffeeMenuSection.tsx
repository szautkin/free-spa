import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import { useContent, coffeeTheme } from '../../config';

const CoffeeMenuSection = () => {
  const coffeeContent = useContent();
  const { menu } = coffeeContent;
  const { colors, spacing, borderRadius, shadows, animations } = coffeeTheme;
  // Safely access first category with default fallback to prevent undefined errors
  const [activeCategory, setActiveCategory] = useState(menu.categories?.[0]?.id || '');

  const filteredItems = menu.items.filter((item) => item.category === activeCategory);
  const featuredItems = filteredItems.filter((item) => item.featured);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
  };

  return (
    <Box
      component="section"
      id="menu"
      sx={{
        py: { xs: spacing['3xl'], md: spacing['5xl'] },
        backgroundColor: colors.background.default,
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
            {menu.sectionTitle}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: coffeeTheme.typography.fontFamily.heading,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: coffeeTheme.typography.fontWeight.bold,
              color: colors.text.primary,
              mt: spacing.sm,
              mb: spacing.lg,
            }}
          >
            {menu.subtitle}
          </Typography>
        </Box>

        {/* Category Tabs */}
        <Box
          sx={{
            mb: spacing['2xl'],
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
                py: spacing.md,
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
            {menu.categories.map((category) => (
              <Tab
                key={category.id}
                label={category.name}
                value={category.id}
              />
            ))}
          </Tabs>
        </Box>

        {/* Category Description */}
        <Box sx={{ textAlign: 'center', mb: spacing.xl }}>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              fontSize: '1.125rem',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {menu.categories.find((cat) => cat.id === activeCategory)?.description}
          </Typography>
        </Box>

        {/* Featured Items */}
        {featuredItems.length > 0 && (
          <Box sx={{ mb: spacing['2xl'] }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: coffeeTheme.typography.fontFamily.heading,
                fontWeight: coffeeTheme.typography.fontWeight.bold,
                color: colors.text.primary,
                mb: spacing.lg,
                textAlign: 'center',
              }}
            >
              {menu.featuredTitle}
            </Typography>
            <Grid container spacing={3}>
              {featuredItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: colors.secondary.light,
                      borderRadius: borderRadius.xl,
                      boxShadow: shadows.lg,
                      border: `2px solid ${colors.secondary.main}`,
                      transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: shadows.xl,
                      },
                    }}
                  >
                    <CardContent sx={{ p: spacing.xl }}>
                      <Stack spacing={spacing.sm}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: coffeeTheme.typography.fontWeight.bold,
                              color: colors.text.primary,
                              fontSize: '1.25rem',
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: coffeeTheme.typography.fontWeight.bold,
                              color: colors.secondary.main,
                              fontSize: '1.25rem',
                            }}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.text.secondary,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                        {item.tags && item.tags.length > 0 && (
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                            {item.tags.map((tag) => (
                              <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                sx={{
                                  backgroundColor: colors.background.paper,
                                  color: colors.text.secondary,
                                  fontSize: '0.75rem',
                                }}
                              />
                            ))}
                          </Stack>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* All Items */}
        <Grid container spacing={2}>
          {filteredItems
            .filter((item) => !item.featured)
            .map((item) => (
              <Grid item xs={12} sm={6} key={item.id}>
                <Card
                  sx={{
                    backgroundColor: colors.background.paper,
                    borderRadius: borderRadius.lg,
                    boxShadow: shadows.sm,
                    transition: `all ${animations.duration.fast}ms ${animations.easing.easeInOut}`,
                    '&:hover': {
                      boxShadow: shadows.md,
                    },
                  }}
                >
                  <CardContent sx={{ p: spacing.lg }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: spacing.sm,
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: coffeeTheme.typography.fontWeight.semibold,
                            color: colors.text.primary,
                            fontSize: '1.125rem',
                            mb: spacing.xs,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.text.secondary,
                            lineHeight: 1.5,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: coffeeTheme.typography.fontWeight.bold,
                          color: colors.secondary.main,
                          fontSize: '1.125rem',
                          ml: spacing.md,
                          flexShrink: 0,
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                    {item.tags && item.tags.length > 0 && (
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.5} mt={1}>
                        {item.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: colors.background.light,
                              color: colors.text.secondary,
                              fontSize: '0.7rem',
                              height: '20px',
                            }}
                          />
                        ))}
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoffeeMenuSection;
