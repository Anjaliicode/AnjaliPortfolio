import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const theme = useTheme();
  const username = "Anjaliicode";

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            display: 'inline-block',
            padding: '10px',
            background: `linear-gradient(to right, #25cefd, #f14d9f)`,
            borderRadius: '15px',
            color: 'white'
          }}
        >
          GITHUB STATISTICS & CALENDAR
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { 
            xs: 'column', 
            lg: 'row' 
          },
          width: '80%',
          margin: 'auto',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {[
         
          {
            id: "github-stats-card",
            src: `https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&theme=react`
          },
          {
            id: "github-top-langs",
            src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=react`
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2 
            }}
            style={{ margin: 'auto' }}
          >
            <img
              id={stat.id}
              src={stat.src}
              alt={`GitHub ${stat.id}`}
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '10px',
                boxShadow: theme.shadows[3]
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default GitHubStats;