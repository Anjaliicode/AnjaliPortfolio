import React from 'react';
import { Box, Container, Typography, Paper, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import SpeedIcon from '@mui/icons-material/Speed';

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using React.js, leveraging modern frameworks and libraries for optimal user experience.',
      color: theme.palette.primary.main
    },
    {
      icon: <BugReportIcon sx={{ fontSize: 40, color: theme.palette.primary.light }} />,
      title: 'Problem Solving',
      description: 'Analytical approach to debugging and optimizing code performance. Strong foundation in data structures and algorithms.',
      color: theme.palette.primary.light
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: theme.palette.primary.dark }} />,
      title: 'Performance Optimization',
      description: 'Enhancing website performance through code optimization, efficient state management, and modern development practices.',
      color: theme.palette.primary.dark
    }
  ];

  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 8,
              background: theme.palette.custom.gradientText,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What I Do Best
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center'
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: '1 1 300px', maxWidth: '400px' }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: alpha(service.color, 0.05),
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    border: `1px solid ${alpha(service.color, 0.3)}`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      backgroundColor: service.color,
                    },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: `0 15px 30px ${alpha(service.color, 0.2)}`,
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(360deg)',
                      }
                    },
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      color: service.color,
                      mb: 3,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;