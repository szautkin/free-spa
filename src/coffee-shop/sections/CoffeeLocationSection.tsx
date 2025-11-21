import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Link,
  IconButton,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useContent, coffeeTheme } from '../../config';

const CoffeeLocationSection = () => {
  const coffeeContent = useContent();
  const { location } = coffeeContent;
  const { colors, spacing, borderRadius, shadows, animations } = coffeeTheme;

  const daysOfWeek = [
    { key: 'monday', label: location.labels.daysOfWeek.monday },
    { key: 'tuesday', label: location.labels.daysOfWeek.tuesday },
    { key: 'wednesday', label: location.labels.daysOfWeek.wednesday },
    { key: 'thursday', label: location.labels.daysOfWeek.thursday },
    { key: 'friday', label: location.labels.daysOfWeek.friday },
    { key: 'saturday', label: location.labels.daysOfWeek.saturday },
    { key: 'sunday', label: location.labels.daysOfWeek.sunday },
  ];

  return (
    <Box
      component="section"
      id="location"
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
            {location.sectionTitle}
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
            {location.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {location.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Address Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: colors.background.paper,
                borderRadius: borderRadius.xl,
                boxShadow: shadows.md,
                transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: shadows.lg,
                },
              }}
            >
              <CardContent sx={{ p: spacing.xl }}>
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: colors.secondary.light,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: spacing.lg,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 30, color: colors.secondary.main }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: coffeeTheme.typography.fontWeight.bold,
                    color: colors.text.primary,
                    mb: spacing.md,
                  }}
                >
                  {location.labels.address}
                </Typography>
                <Stack spacing={0.5}>
                  <Typography variant="body1" color={colors.text.secondary}>
                    {location.address.street}
                  </Typography>
                  <Typography variant="body1" color={colors.text.secondary}>
                    {location.address.city}, {location.address.state} {location.address.zip}
                  </Typography>
                  <Typography variant="body1" color={colors.text.secondary}>
                    {location.address.country}
                  </Typography>
                </Stack>
                {location.mapUrl && (
                  <Link
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-block',
                      mt: spacing.md,
                      color: colors.secondary.main,
                      fontWeight: coffeeTheme.typography.fontWeight.semibold,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {location.labels.getDirections}
                  </Link>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Hours Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: colors.background.paper,
                borderRadius: borderRadius.xl,
                boxShadow: shadows.md,
                transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: shadows.lg,
                },
              }}
            >
              <CardContent sx={{ p: spacing.xl }}>
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: colors.secondary.light,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: spacing.lg,
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 30, color: colors.secondary.main }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: coffeeTheme.typography.fontWeight.bold,
                    color: colors.text.primary,
                    mb: spacing.md,
                  }}
                >
                  {location.labels.hours}
                </Typography>
                <Stack spacing={1}>
                  {daysOfWeek.map((day) => (
                    <Box
                      key={day.key}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.text.secondary,
                          fontWeight: coffeeTheme.typography.fontWeight.medium,
                        }}
                      >
                        {day.label}
                      </Typography>
                      <Typography variant="body2" color={colors.text.secondary}>
                        {location.hours[day.key as keyof typeof location.hours]}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: colors.background.paper,
                borderRadius: borderRadius.xl,
                boxShadow: shadows.md,
                transition: `all ${animations.duration.normal}ms ${animations.easing.easeInOut}`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: shadows.lg,
                },
              }}
            >
              <CardContent sx={{ p: spacing.xl }}>
                <Box
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: colors.secondary.light,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: spacing.lg,
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 30, color: colors.secondary.main }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: coffeeTheme.typography.fontWeight.bold,
                    color: colors.text.primary,
                    mb: spacing.md,
                  }}
                >
                  {location.labels.contact}
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <PhoneIcon sx={{ fontSize: 18, color: colors.text.secondary }} />
                      <Typography variant="body2" color={colors.text.secondary}>
                        {location.labels.phone}
                      </Typography>
                    </Box>
                    <Link
                      href={`tel:${location.contact.phone.replace(/\D/g, '')}`}
                      sx={{
                        color: colors.secondary.main,
                        fontWeight: coffeeTheme.typography.fontWeight.semibold,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {location.contact.phone}
                    </Link>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <EmailIcon sx={{ fontSize: 18, color: colors.text.secondary }} />
                      <Typography variant="body2" color={colors.text.secondary}>
                        {location.labels.email}
                      </Typography>
                    </Box>
                    <Link
                      href={`mailto:${location.contact.email}`}
                      sx={{
                        color: colors.secondary.main,
                        fontWeight: coffeeTheme.typography.fontWeight.semibold,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {location.contact.email}
                    </Link>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color={colors.text.secondary}
                      sx={{ mb: 1 }}
                    >
                      {location.labels.followUs}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {location.contact.social.instagram && (
                        <IconButton
                          component="a"
                          href={location.contact.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: colors.background.light,
                            color: colors.text.secondary,
                            '&:hover': {
                              backgroundColor: colors.secondary.main,
                              color: colors.primary.contrastText,
                            },
                          }}
                        >
                          <InstagramIcon />
                        </IconButton>
                      )}
                      {location.contact.social.facebook && (
                        <IconButton
                          component="a"
                          href={location.contact.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: colors.background.light,
                            color: colors.text.secondary,
                            '&:hover': {
                              backgroundColor: colors.secondary.main,
                              color: colors.primary.contrastText,
                            },
                          }}
                        >
                          <FacebookIcon />
                        </IconButton>
                      )}
                      {location.contact.social.twitter && (
                        <IconButton
                          component="a"
                          href={location.contact.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: colors.background.light,
                            color: colors.text.secondary,
                            '&:hover': {
                              backgroundColor: colors.secondary.main,
                              color: colors.primary.contrastText,
                            },
                          }}
                        >
                          <TwitterIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoffeeLocationSection;
