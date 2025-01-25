import React from 'react';
import { Container, Typography,useTheme, Box, Paper } from '@mui/material';

const GitHubStats = () => {
  const theme = useTheme();
  return (
    <Container sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: 3,
      py: 4 
    }}>
      <Typography 
        variant="h3" 
        sx={{ 
          // background: 'linear-gradient(to right, #7C3AED, #EC4899)',
          background: theme.palette.custom.gradientText,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          textAlign: 'center'
        }}
      >
        GitHub Statistics
      </Typography>

      <Paper 
        // elevation={4}
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 2,
          p: 3,
          // borderRadius: 3,
          background:'transparent',
          // background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1))',
          maxWidth: 1000,
          width: '100%'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Anjaliicode&theme=react&hide_border=true&background=0F172A&ring=7C3AED&fire=EC4899&currStreakLabel=F8FAFC"
            alt="GitHub Streak Stats"
            style={{ 
              maxWidth: '100%', 
              width: '500px', 
              // borderRadius: '12px',
              // boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=Anjaliicode&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0F172A&text_color=F8FAFC&title_color=7C3AED&icon_color=EC4899"
            alt="GitHub Stats Card"
            style={{ 
              maxWidth: '100%', 
              width: '500px', 
              // borderRadius: '12px',
              // boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Anjaliicode&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0F172A&text_color=F8FAFC&title_color=7C3AED"
            alt="GitHub Top Languages"
            style={{ 
              maxWidth: '100%', 
              width: '500px', 
              // borderRadius: '12px',
              // boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default GitHubStats;