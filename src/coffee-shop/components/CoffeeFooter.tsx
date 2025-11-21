import { Box, Container, Typography, Grid, Link, Stack } from '@mui/material';
import { useContent, coffeeTheme } from '../../config';

const CoffeeFooter = () => {
  const coffeeContent = useContent();
  const { footer, location, metadata } = coffeeContent;
  // borderRadius is available in coffeeTheme but not currently used in this component
  const { colors, spacing } = coffeeTheme;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.primary.main,
        color: colors.primary.contrastText,
        py: spacing['3xl'],
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: coffeeTheme.typography.fontFamily.heading,
                fontWeight: coffeeTheme.typography.fontWeight.bold,
                mb: spacing.md,
              }}
            >
              {footer.businessName}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: coffeeTheme.typography.fontFamily.accent,
                fontSize: '1.125rem',
                mb: spacing.md,
                opacity: 0.9,
              }}
            >
              {footer.tagline}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                lineHeight: 1.6,
              }}
            >
              {metadata.siteDescription}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: coffeeTheme.typography.fontWeight.semibold,
                mb: spacing.md,
              }}
            >
              {footer.labels.quickLinks}
            </Typography>
            <Stack spacing={1}>
              {footer.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  sx={{
                    color: colors.primary.contrastText,
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: coffeeTheme.typography.fontWeight.semibold,
                mb: spacing.md,
              }}
            >
              {footer.labels.contact}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {location.address.street}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {location.address.city}, {location.address.state} {location.address.zip}
              </Typography>
              <Box sx={{ pt: spacing.sm }}>
                <Link
                  href={`tel:${location.contact.phone.replace(/\D/g, '')}`}
                  sx={{
                    color: colors.primary.contrastText,
                    textDecoration: 'none',
                    opacity: 0.8,
                    display: 'block',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {location.contact.phone}
                </Link>
                <Link
                  href={`mailto:${location.contact.email}`}
                  sx={{
                    color: colors.primary.contrastText,
                    textDecoration: 'none',
                    opacity: 0.8,
                    display: 'block',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {location.contact.email}
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            borderTop: `1px solid rgba(255, 255, 255, 0.2)`,
            mt: spacing['2xl'],
            pt: spacing.xl,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
            }}
          >
            {footer.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CoffeeFooter;
