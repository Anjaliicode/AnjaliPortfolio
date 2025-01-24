import React from 'react';
import { Box, Container, Typography,useTheme, styled, Link, Fade } from '@mui/material';
import { GitHub, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
}));

// const GradientTitle = styled(Typography)(({ theme }) => ({
//   background: theme.palette.custom.gradientText,
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   padding: '8px 24px',
//   borderRadius: '8px',
//   display: 'inline-block',
//   fontSize: '2rem',
//   marginBottom: '1.5rem',
// }));

const ContactText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 1.6,
  marginBottom: '2rem',
}));

const ContactBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: '12px 24px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  margin: '10px',
  boxShadow: `0 0 10px ${theme.palette.primary.dark}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 0 20px ${theme.palette.primary.main}`,
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
}));

const ContactInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.9rem',
}));

const ContactLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1rem',
  fontWeight: 'bold',
}));

const SocialContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  margin: '2rem 0',
});

const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '50%',
  width: '45px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
    background: theme.palette.custom.cardGradient,
  },
}));

const GradientBar = styled(Box)(({ theme }) => ({
  height: '4px',
  background: theme.palette.custom.gradientText,
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: '1rem 0',
  '& span': {
    background: theme.palette.custom.gradientText,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

export default function Footer() {
  const theme = useTheme();
  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center' }}>
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
                        Contact Me
                      </Typography>
            {/* <GradientTitle variant="h3">
              CONTACT ME
            </GradientTitle> */}
            
            <ContactText>
              I am currently specializing in MERN development.<br />
              Feel free to drop a message for any suggestion,<br />
              and we can get in touch.
            </ContactText>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              mb: 4
            }}>
              <ContactBox>
                <ContactIcon>
                  <Phone />
                </ContactIcon>
                <Box>
                  <ContactLabel>Call</ContactLabel>
                  <ContactInfo>+91 9876545***</ContactInfo>
                </Box>
              </ContactBox>

              <ContactBox>
                <ContactIcon>
                  <Email />
                </ContactIcon>
                <Box>
                  <ContactLabel>Email</ContactLabel>
                  <ContactInfo>anjalisaini2224@gmail.com</ContactInfo>
                </Box>
              </ContactBox>

              <ContactBox>
                <ContactIcon>
                  <LocationOn />
                </ContactIcon>
                <Box>
                  <ContactLabel>Address</ContactLabel>
                  <ContactInfo>Roorkee,Uttrakhand</ContactInfo>
                </Box>
              </ContactBox>
            </Box>

            <SocialContainer>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener">
                <LinkedIn />
              </SocialIcon>
              <SocialIcon href="https://github.com/Anjaliicode" target="_blank" rel="noopener">
                <GitHub />
              </SocialIcon>
            </SocialContainer>
          </Box>
        </Fade>
      </Container>
      
      <GradientBar />
      
      <CopyrightText>
        Made by <span>Anjali Saini</span> 👋 ❤️
      </CopyrightText>
    </FooterContainer>
  );
}