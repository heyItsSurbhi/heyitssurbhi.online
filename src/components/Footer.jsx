import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(10, 10, 15, 0.8)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            Built with <FavoriteIcon sx={{ fontSize: 14, color: 'primary.light' }} /> by Surbhi Mundhe
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://www.linkedin.com/in/surbhimundhe/"
              target="_blank"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.light' },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="mailto:surbhimundhe2102@gmail.com"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.light' },
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Typography variant="body2" sx={{ color: 'text.muted', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
