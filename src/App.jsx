// src/App.js  

import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { ThemeProvider, CssBaseline, Box } from '@mui/material';  
import { darkTheme } from './theme';  
import Navbar from './Pages/Navbar';  
import Home from './Pages/Home';  
import About from './Pages/About';  
import Skill from './Pages/Skill';  
import Services from './Pages/Services';  
import Projects from './Pages/Project';  
import Footer from './Pages/Footer';  
import GitHubStats from './Pages/Github';   
// import AllProjects from './Pages/AllProjects';

const MainLayout = () => {  
  return (  
    <Box>  
      <Home />  
      <About />  
      <Skill />  
      <Projects />
      <Services />  
       
      <GitHubStats />  
      <Footer /> 
      {/* <AllProjects/>  */}
       
    </Box>  
  );  
};  

const App = () => {  
  return (  
    <Router>   
      <ThemeProvider theme={darkTheme}>  
        <CssBaseline />  
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>  
          <Navbar />  
          <Box component="main">   
            <Routes>  
              <Route path="/" element={<MainLayout />} />  
              <Route path="/about" element={<About />} />  
              <Route path="/skill" element={<Skill />} />  
              <Route path="/services" element={<Services />} />  
              <Route path="/projects" element={<Projects />} />  
              <Route path="/footer" element={<Footer />} />  
            </Routes>   
          </Box>  
        </Box>  
      </ThemeProvider>  
    </Router>  
  );  
};  

export default App;