import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const highlights = [
  { icon: <WorkIcon />, value: '8.5+', label: 'Years Experience' },
  { icon: <CodeIcon />, value: '3', label: 'Industry Domains' },
  { icon: <GroupsIcon />, value: '7+', label: 'Engineers Mentored' },
  { icon: <RocketLaunchIcon />, value: '42%', label: 'Performance Gains' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
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
            sx={{
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
              textAlign: 'center',
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              borderRadius: 2,
              mx: 'auto',
              mb: 6,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              mb: 8,
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.9,
            }}
          >
            I'm a Senior Frontend Engineer passionate about building elegant,
            performant, and accessible web applications. From crafting design systems
            at scale to architecting cloud-native banking platforms, I thrive at
            the intersection of engineering excellence and user experience. Currently
            leading frontend development for Citibank's digital banking platform,
            where I drive innovation across transaction monitoring, payment workflows,
            and operational dashboards.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {highlights.map((item, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'rgba(26, 26, 46, 0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(124,58,237,0.4)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 60px rgba(124,58,237,0.1)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.light', mb: 1.5, '& svg': { fontSize: 32 } }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 0.5,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
