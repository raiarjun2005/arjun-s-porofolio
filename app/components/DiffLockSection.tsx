"use client";
import React, { useState } from "react";
import { Box, Typography, Stack, Collapse } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const amgOrange = "#ff4d00";

// --- Data for the switches ---
const lockData = [
  { id: 1, title: "FRONT END", skills: "MUI // Next.js // Tailwind" },
  { id: 2, title: "CENTER LOCK", skills: "Flutter // Firebase // Dart" },
  { id: 3, title: "REAR END", skills: "Figma // Inkscape" },
];

// Define keyframes for rotation
const spin = {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
};

const counterSpin = {
  '0%': { transform: 'rotate(0deg) scaleX(-1)' }, // Keep it flipped horizontally
  '100%': { transform: 'rotate(-360deg) scaleX(-1)' },
};


// --- Rocker Switch Component ---
const RockerSwitch = ({ data }: { data: any }) => {
  const [isEngaged, setIsEngaged] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsEngaged(true)}
      onMouseLeave={() => setIsEngaged(false)}
      sx={{
        position: "relative",
        width: { xs: "50px", sm: "70px", md: "110px", lg: "130px" },
        height: { xs: "80px", sm: "110px", md: "160px", lg: "190px" },
        borderRadius: { xs: "6px", md: "12px" },
        background: isEngaged
          ? `linear-gradient(180deg, #1a1a1a 0%, #2b2b2b 40%, #1a1a1a 100%)`
          : `linear-gradient(180deg, #555 0%, #aaa 30%, #888 50%, #444 100%)`,
        border: "1px solid #333",
        boxShadow: isEngaged
          ? "inset 0 5px 10px rgba(0,0,0,0.5)"
          : "0 5px 15px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)",
        transform: isEngaged ? "translateY(3px) scale(0.98)" : "translateY(0)",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        p: { xs: 0.8, md: 2 },
      }}
    >
      <Typography
        sx={{
          color: isEngaged ? amgOrange : "grey.300",
          fontSize: { xs: "0.4rem", sm: "0.55rem", md: "0.7rem", lg: "0.85rem" },
          letterSpacing: 1,
          fontFamily: quicksand.style.fontFamily,
          fontWeight: "bold",
          transition: "color 0.3s",
          textAlign: "center",
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          width: "50%",
          height: { xs: "2px", md: "4px" },
          borderRadius: "2px",
          bgcolor: isEngaged ? amgOrange : "#222",
          boxShadow: isEngaged
            ? `0 0 8px ${amgOrange}, 0 0 15px ${amgOrange}`
            : "inset 0 1px 3px rgba(0,0,0,0.8)",
          transition: "all 0.3s",
        }}
      />

      <Box
        sx={{
          width: { xs: "12px", sm: "20px", md: "28px", lg: "32px" },
          height: { xs: "12px", sm: "20px", md: "28px", lg: "32px" },
          border: `2px solid ${isEngaged ? amgOrange : "#555"}`,
          borderRadius: "4px",
          opacity: isEngaged ? 1 : 0.6,
          transition: "all 0.3s",
        }}
      />

      <Collapse
        in={isEngaged}
        sx={{
          position: "absolute",
          top: "110%",
          left: "-15%", 
          right: "-15%",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            p: { xs: 0.5, md: 1 },
            bgcolor: "rgba(255, 77, 0, 0.1)",
            border: `1px solid ${amgOrange}`,
            borderRadius: "4px",
            backdropFilter: "blur(5px)",
          }}
        >
          <Typography
            sx={{
              color: amgOrange,
              fontSize: { xs: "0.5rem", md: "0.75rem", lg: "0.85rem" },
              fontFamily: quicksand.style.fontFamily,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            [{data.skills}]
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

// --- Main Section Component ---
export default function DiffLockSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 20 },
        px: { xs: 1, md: 2 },
        backgroundColor: "#0d0d0d",
        backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 10px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "grey.600",
          letterSpacing: 3,
          mb: 1,
          fontSize: { xs: "0.8rem", md: "1rem" },
          textTransform: "uppercase",
          fontFamily: quicksand.style.fontFamily,
        }}
      >
        System Core
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: amgOrange,
          fontWeight: 700,
          mb: { xs: 6, md: 10 },
          fontFamily: quicksand.style.fontFamily,
          fontSize: { xs: "2.5rem", md: "4.5rem", lg: "5.5rem" },
        }}
      >
        Capability Locks
      </Typography>

      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(180deg, #161616 0%, #050505 100%)", 
          borderRadius: { xs: "24px", md: "80px", lg: "100px" },
          // Adjusted padding to accommodate massive vents
          p: { xs: 2, sm: 4, md: "60px 80px", lg: "80px 100px" },
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.8), inset 0 2px 5px rgba(255,255,255,0.05)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
          overflow: "hidden"
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          // Slightly adjusted gap to balance the huge vents
          spacing={{ xs: 1, sm: 3, md: 6, lg: 8 }}
        >
          {/* LEFT VENT - MASSIVE SIZE UPGRADE */}
          <Box
            component="img"
            src="/image.png"
            sx={{
              width: { xs: "65px", sm: "110px", md: "230px", lg: "400px" },
              height: { xs: "65px", sm: "110px", md: "230px", lg: "400px" },
              opacity: 0.85,
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))",
              animation: 'spin 20s linear infinite',
              '@keyframes spin': spin,
            }}
          />

          {/* CENTRAL SWITCH PANEL */}
          <Box
            sx={{
              background:
                "linear-gradient(180deg, #d0d0d0 0%, #f0f0f0 30%, #a0a0a0 100%)",
              borderRadius: { xs: "12px", md: "24px", lg: "30px" },
              p: { xs: "8px 12px", sm: "15px 25px", md: "30px 45px", lg: "40px 60px" },
              boxShadow:
                "inset 0 2px 5px rgba(255,255,255,0.8), 0 5px 15px rgba(0,0,0,0.5)",
              display: "flex",
              gap: { xs: 1, sm: 2, md: 3, lg: 4 },
            }}
          >
            {lockData.map((lock) => (
              <RockerSwitch key={lock.id} data={lock} />
            ))}
          </Box>

          {/* RIGHT VENT - MASSIVE SIZE UPGRADE */}
          <Box
            component="img"
            src="/image.png"
            sx={{
              width: { xs: "65px", sm: "110px", md: "230px", lg: "400px" },
              height: { xs: "65px", sm: "110px", md: "230px", lg: "400px" },
              opacity: 0.85,
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))",
              animation: 'counterSpin 20s linear infinite',
              '@keyframes counterSpin': counterSpin,
            }}
          />
        </Stack>

        {/* THE GRILL */}
        <Box
          sx={{
            width: { xs: "80%", md: "60%" },
            height: { xs: "15px", sm: "25px", md: "40px" },
            mt: { xs: 4, md: 8, lg: 10 },
            borderRadius: "20px",
            background:
              "repeating-linear-gradient(45deg, #0a0a0a, #0a0a0a 4px, #1a1a1a 4px, #1a1a1a 8px)",
            boxShadow: "inset 0 0 15px rgba(0,0,0,0.9)",
            opacity: 0.8,
          }}
        />
      </Box>
    </Box>
  );
}