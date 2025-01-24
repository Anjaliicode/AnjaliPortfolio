import React from 'react';
import html from '../assets/html1.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react1.png';
import redux from '../assets/redux.png';
import chakra from '../assets/chakra-ui.jpg';
import github from '../assets/github.png';
import npm from '../assets/npm.png';
import vscode from '../assets/vscode.png';
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';

const skillIcons = {
  Chakra: chakra,
  CSS: css,
  HTML: html,
  JavaScript: js,
  Redux: redux,
  React: react,
  GitHub: github,
  NPM: npm,
  VSCode: vscode
};

const SkillCard = ({ skill, icon }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }}
    >
      <Box
        component={motion.div}
        whileHover={{
          scale: 1.05,
          boxShadow: `0 0 15px ${alpha(theme.palette.primary.main, 0.5)}`
        }}
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          // borderRadius: 3,
          p: 3,
          textAlign: 'center',
          width: { xs: 100, sm: 150 },
          height: { xs: 180, sm: 140 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          border: '8px solid transparent',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
          animation: 'borderAnimation 3s ease infinite',
          '@keyframes borderAnimation': {
            '0%': {
              borderImageSource: `linear-gradient(to right, 
                ${theme.palette.primary.main}, 
                ${theme.palette.secondary.main})`,
              borderImageSlice: 1
            },
            '50%': {
              borderImageSource: `linear-gradient(to right, 
                ${theme.palette.secondary.main}, 
                ${theme.palette.primary.main})`,
              borderImageSlice: 1
            },
            '100%': {
              borderImageSource: `linear-gradient(to right, 
                ${theme.palette.primary.main}, 
                ${theme.palette.secondary.main})`,
              borderImageSlice: 1
            }
          }
        }}
      >
        <Box
          component="img"
          src={icon}
          alt={skill}
          sx={{
            width: { xs: 60, sm: 60 },
            height: { xs: 60, sm: 60 },
            mb: 1,
            mt: 1,
            objectFit: 'contain',
            filter: 'grayscale(20%) brightness(110%)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'rotate(360deg)'
            }
          }}
        />
        <Typography 
          variant="subtitle1" 
          color="primary"
          sx={{ 
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
          }}
        >
          {skill}
        </Typography>
      </Box>
    </motion.div>
  );
};

const Skills = () => {
  const theme = useTheme();
  const skills = Object.entries(skillIcons).map(([skill, icon]) => ({ skill, icon }));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.main}10, 
            ${theme.palette.secondary.main}10)`,
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 10,
            fontWeight: 'bold',
            background: theme.palette.custom.gradientText,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Technical Skills
        </Typography>

        <Stack 
          direction="row" 
          flexWrap="wrap" 
          justifyContent="center" 
          alignItems="center" 
          spacing={3}
          sx={{ 
            display: 'flex', 
            gap: { xs: 2, sm: 3 } 
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Skills;