"use client";
import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { Quicksand } from "next/font/google";
// Agar tu icons use kar raha hai MUI ke, toh inko import kar lena, warna apne custom icons laga lena
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const amgOrange = "#ff4d00";
const amgRed = "#ff1744"; // Ignition Red

// --- The Breathing Engine Animation ---
const pulseGlow = {
  "0%": { boxShadow: `0 0 15px rgba(255, 23, 68, 0.2), inset 0 0 10px rgba(255, 23, 68, 0.1)` },
  "50%": { boxShadow: `0 0 40px rgba(255, 23, 68, 0.6), inset 0 0 20px rgba(255, 23, 68, 0.4)` },
  "100%": { boxShadow: `0 0 15px rgba(255, 23, 68, 0.2), inset 0 0 10px rgba(255, 23, 68, 0.1)` },
};

export default function CommandCenter() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "70vh", // Lamba section taaki button center me focus me rahe
        backgroundColor: "#050505",
        // The Invisible Spotlight Trick
        backgroundImage: "radial-gradient(circle at center, #1a0500 0%, #050505 70%)",
        overflow: "hidden",
        pt: { xs: 15, md: 20 },
        pb: 4, // Footer padding
      }}
    >
      {/* --- TOP: HEADING --- */}
      <Box sx={{ textAlign: "center", zIndex: 2 }}>
        <Typography
          sx={{
            color: "grey.600",
            letterSpacing: 4,
            mb: 2,
            fontSize: { xs: "0.8rem", md: "1rem" },
            textTransform: "uppercase",
            fontFamily: quicksand.style.fontFamily,
          }}
        >
          Command Center
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 8,
            fontFamily: quicksand.style.fontFamily,
            fontSize: { xs: "2.5rem", md: "4.5rem" },
          }}
        >
          Ready to <Box component="span" sx={{ color: amgRed }}>Ignite?</Box>
        </Typography>
      </Box>

      {/* --- MIDDLE: THE START ENGINE BUTTON --- */}
      <Box
        component="a"
        href="mailto:contact.rai63@gmail.com" // YAHAN APNA EMAIL DAAL DENA
        sx={{
          textDecoration: "none",
          width: { xs: "140px", md: "180px" },
          height: { xs: "140px", md: "180px" },
          borderRadius: "50%",
          // Base metallic look
          background: "linear-gradient(145deg, #161616, #0a0a0a)",
          border: "4px solid #222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          // Idle breathing animation
          animation: "pulse 3s infinite ease-in-out",
          "@keyframes pulse": pulseGlow,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 2,
          
          // HOVER STATE: FULL ENGINE POWER
          "&:hover": {
            transform: "scale(1.05)",
            border: `4px solid ${amgRed}`,
            background: "linear-gradient(145deg, #2a0000, #1a0000)", // Gets reddish
            animation: "none", // Stop breathing on hover
            boxShadow: `0 0 60px ${amgRed}, inset 0 0 30px ${amgRed}`, // Intense Glow
            "& .btn-text": {
              color: "white",
              textShadow: "0 0 10px white",
            },
            "& .indicator": {
              bgcolor: "#fff",
              boxShadow: "0 0 15px #fff",
            }
          },
          "&:active": {
            transform: "scale(0.95)", // Press effect
          }
        }}
      >
        {/* Tiny Light Indicator inside button */}
        <Box
          className="indicator"
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            bgcolor: amgRed,
            mb: 1.5,
            transition: "all 0.3s",
          }}
        />
        <Typography
          className="btn-text"
          sx={{
            color: amgRed,
            fontFamily: quicksand.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.3rem" },
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: 2,
            transition: "all 0.3s",
          }}
        >
          ENGINE<br/>START
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "grey.500",
          mt: 6,
          mb: 15, // Space before footer
          fontSize: { xs: "0.85rem", md: "1rem" },
          fontFamily: quicksand.style.fontFamily,
          zIndex: 2,
        }}
      >
        Click to initiate contact sequence.
      </Typography>

      {/* --- BOTTOM: THE REAR DIFFUSER (FOOTER) --- */}
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 10 },
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            color: "grey.600",
            fontFamily: quicksand.style.fontFamily,
            fontSize: "0.85rem",
            mb: { xs: 2, md: 0 }
          }}
        >
          Engineered by <Box component="span" sx={{ color: "white", fontWeight: "bold" }}>Rai63.</Box> © 2026
        </Typography>

        {/* Social Links (Placeholders - Add your own URLs) */}
        <Stack direction="row" spacing={2}>
          <Typography component="a" href="#" sx={{ color: "grey.600", "&:hover": { color: amgOrange }, transition: "0.3s", textDecoration: "none", fontSize: "0.85rem", fontFamily: quicksand.style.fontFamily }}>
            GitHub
          </Typography>
          <Typography component="a" href="#" sx={{ color: "grey.600", "&:hover": { color: amgOrange }, transition: "0.3s", textDecoration: "none", fontSize: "0.85rem", fontFamily: quicksand.style.fontFamily }}>
            LinkedIn
          </Typography>
          <Typography component="a" href="#" sx={{ color: "grey.600", "&:hover": { color: amgOrange }, transition: "0.3s", textDecoration: "none", fontSize: "0.85rem", fontFamily: quicksand.style.fontFamily }}>
            Twitter
          </Typography>
        </Stack>
      </Box>

      {/* The background grill texture at the very bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "repeating-linear-gradient(45deg, #111, #111 5px, #222 5px, #222 10px)",
        }}
      />
    </Box>
  );
}