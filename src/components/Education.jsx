import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const education = [
  {
    degree: 'Bachelor of Technology (BTech. Engineering)',
    institution: 'MIT College of Engineering',
    period: '2014 – 2017',
  },
  {
    degree: 'Diploma in Computer Technology',
    institution: 'MIT Polytechnic',
    period: '2011 – 2014',
  },
];

const certifications = [
  { name: 'Angular Certification', issuer: 'certificates.dev' },
  { name: 'React – The Complete Guide', issuer: 'Udemy' },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      id="education"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        background: 'rgba(18, 18, 26, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2, textAlign: 'center' }}
          >
            Education & Certifications
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              borderRadius: 2,
              mx: 'auto',
              mb: 8,
            }}
          />
        </motion.div>

        <Grid container spacing={4}>
          {/* Education */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                <SchoolIcon sx={{ color: 'primary.light', fontSize: 28 }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Education
                </Typography>
              </Stack>

              <Stack spacing={3}>
                {education.map((edu, i) => (
                  <Paper
                    key={i}
                    elevation={0}
                    sx={{
                      p: 3,
                      background: 'rgba(26, 26, 46, 0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 3,
                      borderLeft: '3px solid',
                      borderLeftColor: 'primary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        border: '1px solid rgba(124,58,237,0.3)',
                        borderLeft: '3px solid',
                        borderLeftColor: 'primary.light',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.light', mb: 0.5 }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                      {edu.period}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Certifications */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                <CardMembershipIcon sx={{ color: 'secondary.light', fontSize: 28 }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Certifications
                </Typography>
              </Stack>

              <Stack spacing={3}>
                {certifications.map((cert, i) => (
                  <Paper
                    key={i}
                    elevation={0}
                    sx={{
                      p: 3,
                      background: 'rgba(26, 26, 46, 0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 3,
                      borderLeft: '3px solid',
                      borderLeftColor: 'secondary.main',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        border: '1px solid rgba(6,182,212,0.3)',
                        borderLeft: '3px solid',
                        borderLeftColor: 'secondary.light',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <VerifiedIcon sx={{ color: 'secondary.light', fontSize: 20 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                          {cert.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {cert.issuer}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>

              {/* Language */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mt: 3,
                  background: 'rgba(26, 26, 46, 0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>
                  Language
                </Typography>
                <Chip
                  label="English – Fluent"
                  sx={{
                    background: 'rgba(124,58,237,0.12)',
                    color: 'primary.light',
                    border: '1px solid rgba(124,58,237,0.2)',
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
