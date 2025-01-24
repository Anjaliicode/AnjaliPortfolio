import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useScrollTrigger,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skill', path: '/skill' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={trigger ? 1 : 0}
      sx={{
        bgcolor: trigger ? alpha(theme.palette.background.paper, 0.95) : 'transparent',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1.5 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              background: theme.palette.custom.gradientText,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
            }}
          >
           {"<AnjaliCode/>"} 
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                ml: 'auto',
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.2),
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    px: 2,
                    py: 1,
                    color: location.pathname === item.path 
                      ? theme.palette.primary.main 
                      : theme.palette.text.primary,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      bgcolor: theme.palette.primary.main,
                      transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'left'
                    },
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      '&:before': {
                        transform: 'scaleX(1)'
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: theme.palette.background.paper,
            borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          },
        }}
      >
        <List sx={{ pt: 8 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} sx={{ mb: 1, px: 2 }}>
              <Button
                fullWidth
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 1.5,
                  color: location.pathname === item.path 
                    ? theme.palette.primary.main 
                    : theme.palette.text.primary,
                  bgcolor: location.pathname === item.path 
                    ? alpha(theme.palette.primary.main, 0.1) 
                    : 'transparent',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                  }
                }}
              >
                {item.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;