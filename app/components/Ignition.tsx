"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const amgOrange = "#ff4d00";
const amgRed = "#ff0000"; // Engine start button generally red hota hai

// Engine ka 'breathing' (pulse) animation
const pulseGlow = {
  "0%": { boxShadow: `0 0 20px rgba(255, 0, 0, 0.2), inset 0 0 10px rgba(255, 0, 0, 0.2)` },
  "50%": { boxShadow: `0 0 50px rgba(255, 0, 0, 0.6), inset 0 0 20px rgba(255, 0, 0, 0.5)` },
  "100%": { boxShadow: `0 0 20px rgba(255, 0, 0, 0.2), inset 0 0 10px rgba(255, 0, 0, 0.2)` },
};

export default function IgnitionSection() {
  return (
    <Box
      sx={{
        py: { xs: 15, md: 25 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050505",
        // TRICK 1: Radial Spotlight Background
        backgroundImage: "radial-gradient(circle at center, #1a0800 0%, #050505 60%)",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          color: "grey.600",
          letterSpacing: 4,
          mb: 2,
          fontSize: { xs: "0.8rem", md: "1rem" },
          textTransform: "uppercase",
          fontFamily: quicksand.style.fontFamily,
          zIndex: 2,
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
          fontSize: { xs: "2rem", md: "3.5rem" },
          textAlign: "center",
          zIndex: 2,
        }}
      >
        Ready to <Box component="span" sx={{ color: amgOrange }}>Ignite</Box> Your Project?
      </Typography>

      {/* TRICK 2 & 3: The Engine Start Button */}
      <Box
        component="a"
        href="mailto:hello@rai63.com" // Yahan apna asli email daal dena
        sx={{
          textDecoration: "none",
          width: { xs: "120px", md: "160px" },
          height: { xs: "120px", md: "160px" },
          borderRadius: "50%",
          background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
          border: "4px solid #222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          // Idle state pulse animation
          animation: "pulse 3s infinite ease-in-out",
          "@keyframes pulse": pulseGlow,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 2,
          // Hover State - FULL POWER
          "&:hover": {
            transform: "scale(1.05)",
            border: `4px solid ${amgRed}`,
            background: "linear-gradient(145deg, #2a0000, #1a0000)",
            animation: "none", // Hover pe pulse rok do
            boxShadow: `0 0 60px ${amgRed}, inset 0 0 30px ${amgRed}`, // Intense Glow
            "& .btn-text": {
              color: "white",
              textShadow: "0 0 10px white",
            },
            "& .indicator": {
              bgcolor: "#fff",
              boxShadow: "0 0 10px #fff",
            }
          },
        }}
      >
        {/* Tiny Light Indicator */}
        <Box
          className="indicator"
          sx={{
            width: "8px",
            height: "8px",
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
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            textAlign: "center",
            lineHeight: 1.2,
            transition: "all 0.3s",
          }}
        >
          ENGINE<br/>START
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "grey.500",
          mt: 8,
          fontSize: { xs: "0.8rem", md: "0.9rem" },
          fontFamily: quicksand.style.fontFamily,
          zIndex: 2,
        }}
      >
        Click to initiate contact sequence.
      </Typography>
    </Box>
  );
}