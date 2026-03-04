"use client";
import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const amgOrange = "#00BFFF";

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

const infiniteTopRow = [...topRowNiches, ...topRowNiches, ...topRowNiches];
const infiniteBottomRow = [...bottomRowNiches, ...bottomRowNiches, ...bottomRowNiches];

const scrollLeft = {
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
};

const scrollRight = {
  "0%": { transform: "translateX(-50%)" },
  "100%": { transform: "translateX(0)" },
};

export default function SkillsMarquee() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, bgcolor: "#0a0a0a", overflow: "hidden" }}>
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

      {/* Top Row */}
      <Box sx={{ display: "flex", overflow: "hidden", mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            width: "max-content",
            animation: "scrollLeft 60s linear infinite",
            "@keyframes scrollLeft": scrollLeft,
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {infiniteTopRow.map((niche, idx) => (
            <Box
              key={idx}
              sx={{
                bgcolor: "#111",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                p: { xs: 2, md: 3 },
                minWidth: { xs: 220, md: 300 },
                transition: "0.3s",
                "&:hover": { borderColor: amgOrange, boxShadow: `0 10px 30px rgba(0,0,0,0.5)`, transform: "scale(1.05)" }
              }}
            >
              <Typography sx={{ color: "grey.500", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: 2, mb: 1, fontFamily: quicksand.style.fontFamily }}>
                [ {niche.title} ]
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {niche.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.03)",
                      color: "grey.300",
                      fontFamily: quicksand.style.fontFamily,
                      border: "1px solid rgba(255,255,255,0.05)",
                      "&:hover": { borderColor: amgOrange, color: "white", bgcolor: "rgba(0,191,255,0.1)", transform: "scale(1.1)" }
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom Row */}
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            width: "max-content",
            animation: "scrollRight 65s linear infinite",
            "@keyframes scrollRight": scrollRight,
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {infiniteBottomRow.map((niche, idx) => (
            <Box
              key={idx}
              sx={{
                bgcolor: "#111",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                p: { xs: 2, md: 3 },
                minWidth: { xs: 220, md: 300 },
                transition: "0.3s",
                "&:hover": { borderColor: amgOrange, boxShadow: `0 10px 30px rgba(0,0,0,0.5)`, transform: "scale(1.05)" }
              }}
            >
              <Typography sx={{ color: "grey.500", fontSize: "0.75rem", fontWeight: "bold", letterSpacing: 2, mb: 1, fontFamily: quicksand.style.fontFamily }}>
                [ {niche.title} ]
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {niche.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.03)",
                      color: "grey.300",
                      fontFamily: quicksand.style.fontFamily,
                      border: "1px solid rgba(255,255,255,0.05)",
                      "&:hover": { borderColor: amgOrange, color: "white", bgcolor: "rgba(0,191,255,0.1)", transform: "scale(1.1)" }
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}