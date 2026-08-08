import { Box, Typography, Container, Paper, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{ py: { xs: 10, md: 14 } }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2, textAlign: 'center' }}
          >
            Let's Connect
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              borderRadius: 2,
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto',
              mb: 6,
              fontSize: '1.05rem',
            }}
          >
            Open to exciting opportunities in Germany and beyond.
            Let's build something amazing together.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              background: 'rgba(26, 26, 46, 0.6)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 4,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              },
            }}
          >
            <Stack spacing={3} alignItems="center">
              {/* Location */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocationOnIcon sx={{ color: 'primary.light' }} />
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  India | Open to Relocation across Germany
                </Typography>
              </Stack>

              {/* Contact Methods */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ width: '100%', justifyContent: 'center' }}
              >
                <Button
                  variant="contained"
                  href="mailto:surbhimundhe2102@gmail.com"
                  startIcon={<EmailIcon />}
                  endIcon={<OpenInNewIcon sx={{ fontSize: '14px !important' }} />}
                  sx={{
                    background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                    px: 3,
                    py: 1.3,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #6d28d9, #4c1d95)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(124,58,237,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  surbhimundhe2102@gmail.com
                </Button>

                <Button
                  variant="outlined"
                  href="https://www.linkedin.com/in/surbhimundhe/"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    borderColor: 'rgba(6,182,212,0.5)',
                    color: 'secondary.light',
                    px: 3,
                    py: 1.3,
                    '&:hover': {
                      borderColor: '#06b6d4',
                      background: 'rgba(6,182,212,0.08)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  LinkedIn Profile
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ color: 'text.secondary', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +91-8149915041
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
