import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  alpha,
  styled,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import picture from "../assets/picture1.jpeg";
import { GitHub, LinkedIn } from "@mui/icons-material";
const SocialContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  margin: "2rem 0",
});

const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
    background: theme.palette.custom.cardGradient,
  },
}));
const Home = () => {
  const theme = useTheme();
  const handleDownloadAndOpen = (fileUrl) => {
    // Create a link element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Set the download attribute
    link.setAttribute("download", fileUrl.split("/").pop());

    // Append to the body (necessary for Firefox)
    document.body.appendChild(link);

    // Open the PDF in a new tab
    window.open(fileUrl, "_blank");

    // Simulate click to trigger download
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        // background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        background: theme.palette.background.default,
        pt: { xs: 12, md: 16 },
        pb: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                mb: 2,
                letterSpacing: -0.5,
              }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 800,
                mb: 2,
                background: theme.palette.custom.gradientText,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: -1,
              }}
            >
              Anjali Saini
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                fontWeight: 500,
                letterSpacing: -0.5,
              }}
            >
              A Passionate{" "}
              <Box
                component="span"
                sx={{ color: theme.palette.secondary.main }}
              >
                Full Stack
              </Box>{" "}
              Developer
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <SocialContainer>
                <SocialIcon
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedIn />
                </SocialIcon>
                <SocialIcon
                  href="https://github.com/Anjaliicode"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHub />
                </SocialIcon>
              </SocialContainer>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleDownloadAndOpen("/Anjali-Saini-Resume.pdf")}
                startIcon={<DownloadRoundedIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  bgcolor: theme.palette.primary.main,
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>

          <Box
            component={motion.div}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              filter: `drop-shadow(0 0 20px ${alpha(
                theme.palette.primary.main,
                0.2
              )})`,
            }}
          >
            <Box
              component="img"
              src={picture}
              alt="Profile"
              sx={{
                width: { xs: "280px", md: "400px" },
                height: "auto",
                borderRadius: "50%",
                position: "relative",
                zIndex: 1,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.02) rotate(1deg)",
                },
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
