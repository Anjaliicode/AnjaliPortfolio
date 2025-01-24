import React from 'react';  
import {   
  Box,   
  Container,  
  Typography,  
  Card,  
  CardMedia,  
  CardContent,  
  Button,  
  Stack,  
  styled,  
  useTheme,  
  Chip   
} from '@mui/material';  
import { motion } from 'framer-motion';  
import { GitHub, Link as LinkIcon } from '@mui/icons-material';  
import eccomerse from '../assets/ecommerse.png';  
import crypto from '../assets/crypto.png'; 
import country from '../assets/country.png';
import rode from '../assets/rodeclone.png'; 

const projects = [  
  {  
    id: 1,  
    title: "Ecommerce Website",  
    image: eccomerse,  
    description: "This project is a fully responsive eCommerce website designed to offer users a seamless shopping experience. With features that allow for easy filtering and sorting of products, it ensures that customers can quickly find what they’re looking for. Built using HTML and CSS, the site features a clean and intuitive interface, making navigation effortless across all devices.",  
    liveLink: "https://martlite.netlify.app/",  
    codeLink: "https://github.com/Anjaliicode/EcommerceProject",  
    technologies: ["HTML", "CSS", "JavaScript","ReactJs","Mui"]  
  },  
  {  
    id: 2,  
    title: "Crypto Currency",  
    image: crypto,  
    description: "This project is a fully responsive and user-friendly platform that delivers real-time information on various cryptocurrencies, market trends, and investment opportunities. Crafted with HTML and CSS, it features a clean, intuitive interface for seamless navigation on any device, complete with advanced filtering and sorting capabilities.",  
    liveLink: "https://krypto-connect.netlify.app/",  
    codeLink: "https://github.com/Anjaliicode/ScriptSprinters",  
    technologies: ["HTML", "CSS","javascript", "React"] 
  }  ,
  {  
    id: 3,  
    title: "Country App",  
    image: country,  
    description: "This project is a fully responsive and user-friendly platform that delivers real-time information on various cryptocurrencies, market trends, and investment opportunities. Crafted with HTML and CSS, it features a clean, intuitive interface for seamless navigation on any device, complete with advanced filtering and sorting capabilities.",  
    liveLink: "https://rest-country-api-as.netlify.app/",  
    codeLink: "https://github.com/Anjaliicode/Counter-App",  
    technologies: ["HTML", "CSS", "javascript"] 
  } ,
  {  
    id: 4,  
    title: "Rode Clone",  
    image: rode,  
    description: "This project is a fully responsive and user-friendly platform that delivers real-time information on various cryptocurrencies, market trends, and investment opportunities. Crafted with HTML and CSS, it features a clean, intuitive interface for seamless navigation on any device, complete with advanced filtering and sorting capabilities.",  
    liveLink: "https://rode-clone-live-link.netlify.app/",  
    codeLink: "https://github.com/Anjaliicode/Rode-clone",  
    technologies: ["HTML", "CSS", "Tailwind css"] 
  } 
];  

const ProjectSection = () => {  
  const theme = useTheme();  

  const ProjectCard = styled(Card)(({ theme }) => ({  
    background: theme.palette.background.paper,  
    borderRadius: theme.shape.borderRadius,  
    border: `1px solid ${theme.palette.primary.main}40`,  
    maxWidth: '445px',  
    width: '100%',  
    position: 'relative',  
    overflow: 'hidden',  
    transition: 'all 0.3s ease',  
    boxShadow: theme.shadows[4],  
    '&:hover': {  
      transform: 'translateY(-10px)',  
      boxShadow: theme.shadows[8],  
      border: `1px solid ${theme.palette.primary.main}`,  
    }  
  }));  

  const ProjectActionButton = styled(Button)(({ theme }) => ({  
    background: theme.palette.custom.gradientText,  
    color: 'white',  
    borderRadius: theme.shape.borderRadius,  
    padding: '10px 20px',  
    transition: 'all 0.3s ease',  
    '&:hover': {  
      transform: 'scale(1.05)',  
      boxShadow: theme.shadows[4],  
    }  
  }));  

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
        <Box sx={{   
          display: 'flex',   
          justifyContent: 'center',   
          mb: 6   
        }}>  
          <Typography   
            variant="h3"   
            sx={{   
              fontWeight: 'bold',  
              background: theme.palette.custom.gradientText,  
              WebkitBackgroundClip: 'text',  
              WebkitTextFillColor: 'transparent',  
              display: 'inline-block',  
              textAlign: 'center'  
            }}  
          >  
            MY PROJECTS  
          </Typography>  
        </Box>  

        <Box sx={{   
          display: 'flex',  
          flexWrap: 'wrap',  
          gap: 4,  
          justifyContent: 'center'  
        }}>  
          {projects.map((project) => (  
            <motion.div  
              key={project.id}  
              initial={{ opacity: 0, scale: 0.9 }}  
              whileInView={{ opacity: 1, scale: 1 }}  
              transition={{ duration: 0.5 }}  
            >  
              <ProjectCard>  
                <CardMedia  
                  component="img"  
                  height="250"  
                  image={project.image}  
                  alt={project.title}  
                  sx={{   
                    objectFit: 'contain',  
                    filter: 'brightness(0.8)'   
                  }}  
                />  
                <CardContent>  
                  <Typography   
                    variant="h5"   
                    color="primary"   
                    sx={{ fontWeight: 'bold', mb: 2 }}  
                  >  
                    {project.title}  
                  </Typography>  
                  <Typography   
                    variant="body1"   
                    color="text.secondary"   
                    sx={{ mb: 3 }}  
                  >  
                    {project.description}  
                  </Typography>  

                  {/* Render Technology Chips */}  
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>  
                    {project.technologies.map((tech, index) => (  
                      <Chip key={index} label={tech} variant="outlined" />  
                    ))}  
                  </Stack>  

                  <Stack   
                    direction="row"   
                    spacing={2}   
                    justifyContent="center"  
                  >  
                    <ProjectActionButton   
                      startIcon={<GitHub />}  
                      href={project.codeLink}  
                      target="_blank"  
                    >  
                      Code  
                    </ProjectActionButton>  
                    <ProjectActionButton   
                      startIcon={<LinkIcon />}  
                      href={project.liveLink}  
                      target="_blank"  
                    >  
                      Live  
                    </ProjectActionButton>  
                  </Stack>  
                </CardContent>  
              </ProjectCard>  
            </motion.div>  
          ))}  
        </Box>  
      </Container>  
    </Box>  
  );  
};  

export default ProjectSection;