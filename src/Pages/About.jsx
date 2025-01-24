import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Dialog,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import picture from '../assets/picture.jpeg';

const About = () => {
  const theme = useTheme();
  const [openImage, setOpenImage] = useState(false);

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        background: `linear-gradient(135deg, 
          ${theme.palette.background.default}, 
          ${theme.palette.background.paper})`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 8,
              background: theme.palette.custom.gradientText,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            About Me
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 4, md: 8 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                cursor: 'pointer',
                borderRadius: '50%',
                boxShadow: `0 15px 35px ${alpha(theme.palette.primary.main, 0.2)}`,
                transition: 'transform 0.3s ease'
              }}
              onClick={() => setOpenImage(true)}
            >
              <img 
                src={picture}
                alt="Anjali Saini"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>

            <Box 
              sx={{ 
                flex: 1,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ 
                  maxWidth: 600,
                  mb: 2,
                  lineHeight: 1.6
                }}
              >
                A passionate MERN stack developer with a keen eye for creating 
                robust and scalable web applications. I specialize in building 
                innovative digital solutions that blend technical expertise 
                with creative problem-solving.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  maxWidth: 600,
                  lineHeight: 1.6
                }}
              >
                My journey in web development is driven by a continuous 
                desire to learn and implement cutting-edge technologies. 
                I'm committed to delivering high-quality, user-centric 
                solutions that make a meaningful impact.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <Dialog
          open={openImage}
          onClose={() => setOpenImage(false)}
          maxWidth="md"
          fullWidth
        >
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              p: 2,
              backgroundColor: theme.palette.background.default
            }}
          >
            <img 
              src={picture}
              alt="Anjali Saini"
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80vh', 
                objectFit: 'contain' 
              }}
            />
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default About;