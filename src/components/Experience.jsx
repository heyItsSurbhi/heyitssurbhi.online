import { Box, Typography, Container, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const experiences = [
  {
    role: 'Lead Frontend Developer (Technical Lead)',
    company: 'Altimetrik',
    client: 'Citibank | Digital Banking Platform',
    period: 'Jun 2024 – Present',
    highlights: [
      'Led frontend development for cloud-native fintech and digital banking applications, improving user engagement by 34%',
      'Built reusable component libraries and enterprise design systems across multiple banking products, reducing dev effort by 38%',
      'Developed transaction monitoring, payment workflows, operational dashboards and corporate action modules',
      'Optimized performance with code splitting, lazy loading and caching — reduced page load by 42%',
      'Implemented CI/CD pipelines with Jest, Cypress and Playwright — increased test coverage by 41%',
      'Mentored 7 engineers while participating in architecture discussions and technical design sessions',
      'Leveraged AI tools (GitHub Copilot, ChatGPT) increasing engineering productivity by 25%',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Material UI', 'AWS ECS', 'Fargate', 'Lambda'],
  },
  {
    role: 'Frontend Developer',
    company: 'Tata Consultancy Services',
    client: 'Mastercard | ALDO | GE Healthcare',
    period: 'Jan 2019 – Jun 2024',
    highlights: [
      'Developed customer-facing banking and eCommerce applications using React, TypeScript, Next.js',
      'Built reusable UI components and shared libraries, reducing development effort by 35%',
      'Developed payment platform features — improved customer engagement by 29%',
      'Optimized frontend performance by 40% using Webpack, lazy loading and bundle optimization',
      'Implemented automated testing reducing regression defects by 34%',
      'Worked with AWS, CI/CD and DevOps pipelines — increased deployment frequency by 26%',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Express', 'Webpack', 'Jest', 'Cypress'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Tata Consultancy Services',
    client: 'ALDO',
    period: 'Feb 2017 – Jan 2018',
    highlights: [
      'Developed responsive applications using React, TypeScript, HTML5 and CSS3',
      'Built reusable UI components and participated in Agile development, testing and code reviews',
    ],
    tech: ['React', 'TypeScript', 'HTML5', 'CSS3'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <Box
      id="experience"
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
            Experience
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

        {/* Timeline */}
        <Box sx={{ position: 'relative', pl: { xs: 3, md: 0 } }}>
          {/* Vertical line */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              left: 8,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #7c3aed, #06b6d4, transparent)',
            }}
          />

          <Stack spacing={4}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                {/* Timeline dot (mobile) */}
                <Box
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    position: 'absolute',
                    left: 3,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    mt: 3,
                  }}
                />

                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    background: 'rgba(26, 26, 46, 0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(124,58,237,0.3)',
                      boxShadow: '0 20px 60px rgba(124,58,237,0.08)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 600 }}
                    >
                      {exp.role}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2} sx={{ mb: 1, flexWrap: 'wrap', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <BusinessIcon sx={{ fontSize: 16, color: 'primary.light' }} />
                      <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 500 }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ color: 'secondary.light', mb: 2, fontStyle: 'italic' }}
                  >
                    {exp.client}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {exp.highlights.map((h, j) => (
                      <Box
                        component="li"
                        key={j}
                        sx={{
                          color: 'text.secondary',
                          mb: 0.8,
                          fontSize: '0.9rem',
                          lineHeight: 1.7,
                          '&::marker': { color: 'primary.light' },
                        }}
                      >
                        {h}
                      </Box>
                    ))}
                  </Box>

                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 0.8 }}>
                    {exp.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          background: 'rgba(124,58,237,0.12)',
                          color: 'primary.light',
                          border: '1px solid rgba(124,58,237,0.2)',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
