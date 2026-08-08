import { Box, Typography, Container, Grid, Paper, LinearProgress, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WebIcon from '@mui/icons-material/Web';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudIcon from '@mui/icons-material/Cloud';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <WebIcon />,
    color: '#7c3aed',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript / JavaScript', level: 93 },
      { name: 'Material UI', level: 90 },
      { name: 'HTML5 / CSS3 / SCSS', level: 92 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Webpack / Express', level: 85 },
    ],
  },
  {
    title: 'Testing',
    icon: <BugReportIcon />,
    color: '#06b6d4',
    skills: [
      { name: 'Jest', level: 90 },
      { name: 'Cypress', level: 88 },
      { name: 'Playwright', level: 85 },
      { name: 'Jasmine / Karma', level: 80 },
      { name: 'E2E Testing', level: 87 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <CloudIcon />,
    color: '#10b981',
    skills: [
      { name: 'AWS (ECS, Fargate, Lambda)', level: 82 },
      { name: 'Docker', level: 78 },
      { name: 'CI/CD / Jenkins', level: 85 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
  {
    title: 'Architecture',
    icon: <ArchitectureIcon />,
    color: '#f59e0b',
    skills: [
      { name: 'Design Systems', level: 92 },
      { name: 'Reusable Components', level: 95 },
      { name: 'Web Performance', level: 90 },
      { name: 'Accessibility (WCAG)', level: 85 },
      { name: 'Secure Coding', level: 83 },
    ],
  },
  {
    title: 'AI & Tooling',
    icon: <SmartToyIcon />,
    color: '#ec4899',
    skills: [
      { name: 'GitHub Copilot', level: 88 },
      { name: 'ChatGPT', level: 90 },
      { name: 'AI-assisted Development', level: 85 },
    ],
  },
  {
    title: 'Practices',
    icon: <GroupWorkIcon />,
    color: '#8b5cf6',
    skills: [
      { name: 'Agile / Scrum', level: 90 },
      { name: 'Cloud-native Architecture', level: 82 },
      { name: 'Code Reviews & Mentoring', level: 92 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{ py: { xs: 10, md: 14 } }}
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
            Technical Arsenal
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

        <Grid container spacing={3}>
          {skillCategories.map((cat, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={cat.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: '100%',
                    background: 'rgba(26, 26, 46, 0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: `1px solid ${cat.color}40`,
                      boxShadow: `0 20px 60px ${cat.color}10`,
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
                    <Box sx={{ color: cat.color, '& svg': { fontSize: 24 } }}>
                      {cat.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                      {cat.title}
                    </Typography>
                  </Stack>

                  <Stack spacing={2}>
                    {cat.skills.map((skill) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: cat.color, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={inView ? skill.level : 0}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: 'rgba(255,255,255,0.04)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`,
                              transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
