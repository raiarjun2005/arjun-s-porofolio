"use client";
import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const amgOrange = "#00BFFF";

// --- Animations for Marquee ---
// Scrolling exactly half the width to create a seamless infinite loop
const scrollLeft = {
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
};

const scrollRight = {
  "0%": { transform: "translateX(-50%)" },
  "100%": { transform: "translateX(0)" },
};

// --- Data: My Journey ---
const myJourney = [
  {
    year: "2024 - 2025",
    title: "NIELIT 'O' Level",
    desc: "Built foundation in C/Python and mastered Web Design basics.",
    isActive: false,
  },
  {
    year: "2026 - 2029",
    title: "BCA (Manipal Uni)",
    desc: "Diving deep into Full-Stack Architecture and Advanced Algorithms.",
    isActive: true, // Current stage glows
  },
  {
     year: "Future Waypoint",
     title: "Tech Architect",
     desc: "Building scalable digital engines and solving real-world problems.",
     isActive: false,
     isFuture: true,
  }
];

// --- Data: Classified Niches (The Upgrade) ---
const topRowNiches = [
  { title: "FRONTEND ENGINE", skills: ["Next.js", "React", "TypeScript", "JavaScript"] },
  { title: "UI AESTHETICS", skills: ["Tailwind CSS", "MUI", "ShadCN", "HTML/CSS"] },
  { title: "DESKTOP DEPLOY", skills: ["ElectronJS", "Windows App"] }
];

const bottomRowNiches = [
  { title: "MOBILE CORE", skills: ["Flutter", "Java", "Kotlin", "Dart"] },
  { title: "BACKEND & CLOUD", skills: ["Firebase", "Node.js", "Vercel", "APIs"] },
  { title: "WORKFLOW & DESIGN", skills: ["Git", "AI-Assisted Dev", "Figma", "Inkscape"] }
];

// Duplicate arrays multiple times to ensure the screen is always filled for the seamless loop
const infiniteTopRow = [...topRowNiches, ...topRowNiches, ...topRowNiches, ...topRowNiches];
const infiniteBottomRow = [...bottomRowNiches, ...bottomRowNiches, ...bottomRowNiches, ...bottomRowNiches];


export default function SkillsEducationClassified() {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 4, lg: 10 }, bgcolor: "#0a0a0a", overflow: "hidden" }}>
      
      {/* ============================== */}
      {/* PART 1: MY JOURNEY (HORIZONTAL) */}
      {/* ============================== */}
      <Box sx={{ mb: { xs: 12, md: 18 } }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontFamily: quicksand.style.fontFamily,
            mb: 8,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          My Journey
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* THE HORIZONTAL GLOWING LINE */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "30px", 
              left: "15%",
              right: "15%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${amgOrange}, transparent)`,
              boxShadow: `0 0 15px ${amgOrange}`,
              zIndex: 1,
              opacity: 0.6,
            }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 4, md: 6 },
              position: "relative",
              zIndex: 2,
            }}
          >
            {myJourney.map((item, index) => (
              <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box
                  sx={{
                    width: item.isActive ? "20px" : "14px",
                    height: item.isActive ? "20px" : "14px",
                    borderRadius: "50%",
                    bgcolor: item.isFuture ? "#222" : amgOrange,
                    border: `3px solid #0a0a0a`,
                    boxShadow: item.isActive ? `0 0 20px ${amgOrange}` : "none",
                    mb: 4,
                    transition: "all 0.3s",
                    zIndex: 2,
                  }}
                />

                <Paper
                  sx={{
                    p: 4,
                    width: "100%",
                    bgcolor: "#121212",
                    borderRadius: "24px",
                    border: item.isFuture ? "1px dashed rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.05)",
                    borderTop: item.isActive ? `2px solid ${amgOrange}` : undefined,
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    opacity: item.isFuture ? 0.6 : 1,
                    
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: item.isFuture ? "none" : `0 15px 30px rgba(223, 104, 48, 0.1)`,
                      borderColor: item.isFuture ? "rgba(255,255,255,0.4)" : amgOrange,
                    },
                  }}
                >
                  <Typography sx={{ color: item.isFuture ? "grey.600" : amgOrange, fontSize: "0.85rem", mb: 1.5, fontFamily: quicksand.style.fontFamily, fontWeight: "bold", letterSpacing: 2 }}>
                    {item.year}
                  </Typography>
                  <Typography variant="h5" sx={{ color: "white", fontFamily: quicksand.style.fontFamily, mb: 2, fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "grey.500", fontFamily: quicksand.style.fontFamily, fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ============================== */}
      {/* PART 2: CLASSIFIED TECH ARSENAL */}
      {/* ============================== */}
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontFamily: quicksand.style.fontFamily,
            mb: 6,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Tech Arsenal
        </Typography>

        {/* Shadow Fades for Infinity Effect */}
        <Box sx={{ position: "absolute", left: 0, top: "80px", bottom: 0, width: "120px", background: "linear-gradient(90deg, #0a0a0a 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", right: 0, top: "80px", bottom: 0, width: "120px", background: "linear-gradient(-90deg, #0a0a0a 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />

        {/* ROW 1: Moves Left */}
        <Box sx={{ display: "flex", overflow: "hidden", mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "max-content",
              animation: "scrollLeft 60s linear infinite", // Slowed down slightly for readability
              "@keyframes scrollLeft": scrollLeft,
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {infiniteTopRow.map((niche, index) => (
              <Box 
                key={index} 
                sx={{ 
                  bgcolor: "#111", 
                  border: "1px solid rgba(255,255,255,0.05)", 
                  borderRadius: "20px", 
                  p: 3, 
                  minWidth: "300px",
                  transition: "0.3s",
                  "&:hover": { borderColor: amgOrange, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }
                }}
              >
                <Typography sx={{ color: "grey.500", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: 2, mb: 2, fontFamily: quicksand.style.fontFamily }}>
                  [ {niche.title} ]
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {niche.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.03)", color: "grey.300", fontFamily: quicksand.style.fontFamily, border: "1px solid rgba(255,255,255,0.05)",
                        "&:hover": { borderColor: amgOrange, color: "white", bgcolor: "rgba(223, 104, 48, 0.1)" }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ROW 2: Moves Right */}
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "max-content",
              animation: "scrollRight 65s linear infinite", 
              "@keyframes scrollRight": scrollRight,
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {infiniteBottomRow.map((niche, index) => (
              <Box 
                key={index} 
                sx={{ 
                  bgcolor: "#111", 
                  border: "1px solid rgba(255,255,255,0.05)", 
                  borderRadius: "20px", 
                  p: 3, 
                  minWidth: "300px",
                  transition: "0.3s",
                  "&:hover": { borderColor: amgOrange, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }
                }}
              >
                <Typography sx={{ color: "grey.500", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: 2, mb: 2, fontFamily: quicksand.style.fontFamily }}>
                  [ {niche.title} ]
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {niche.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.03)", color: "grey.300", fontFamily: quicksand.style.fontFamily, border: "1px solid rgba(255,255,255,0.05)",
                        "&:hover": { borderColor: amgOrange, color: "white", bgcolor: "rgba(223, 104, 48, 0.1)" }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}