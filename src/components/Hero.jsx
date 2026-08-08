import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 10s ease-in-out infinite',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'primary.light',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                mb: 2,
                letterSpacing: 1,
              }}
            >
              Hello, I'm
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
                background: 'linear-gradient(135deg, #f0f0f0 0%, #a78bfa 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Surbhi Mundhe
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box sx={{ mb: 3, minHeight: 48 }}>
              <TypeAnimation
                sequence={[
                  'Senior Frontend Engineer',
                  2000,
                  'Building Digital Banking Platforms',
                  2000,
                  'React & TypeScript Specialist',
                  2000,
                  'Cloud-Native Application Architect',
                  2000,
                  'Design System Creator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontWeight: 500,
                  color: '#a0a0b0',
                }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mb: 4,
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              8.5+ years crafting cloud-native web applications across
              Banking, FinTech, eCommerce & Healthcare. Currently leading
              frontend development at Citibank's digital banking platform.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
              <Button
                variant="contained"
                size="large"
                href="mailto:surbhimundhe2102@gmail.com"
                startIcon={<EmailIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #6d28d9, #4c1d95)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 40px rgba(124,58,237,0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="https://www.linkedin.com/in/surbhimundhe/"
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{
                  borderColor: 'rgba(124,58,237,0.5)',
                  color: 'primary.light',
                  px: 4,
                  py: 1.5,
                  fontSize: '0.95rem',
                  '&:hover': {
                    borderColor: '#7c3aed',
                    background: 'rgba(124,58,237,0.08)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownwardIcon sx={{ color: 'text.secondary', fontSize: 28 }} />
        </motion.div>
      </motion.div>
    </Box>
  );
}
