"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Quicksand } from "next/font/google";
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const techBlue = "#00BFFF";

const techArsenal = [
  { id: "MOD-01", title: "FRONTEND ENGINE", skills: ["Next.js", "React", "TypeScript", "JavaScript"] },
  { id: "MOD-02", title: "MOBILE CORE", skills: ["Flutter", "Java", "Kotlin", "Dart"] },
  { id: "MOD-03", title: "BACKEND & CLOUD", skills: ["Firebase", "Node.js", "Vercel", "APIs"] },
  { id: "MOD-04", title: "UI AESTHETICS", skills: ["Tailwind CSS", "MUI", "ShadCN", "HTML/CSS"] },
  { id: "MOD-05", title: "WORKFLOW & DESIGN", skills: ["Git", "Sketch", "Figma", "Inkscape"] },
  { id: "MOD-06", title: "DESKTOP DEPLOY", skills: ["ElectronJS", "Windows App"] }
];

export default function SkillsTelemetry() {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, px: { xs: 3, md: 8, lg: 12 }, bgcolor: "#020202", color: "white" }}>
      
      <Box sx={{ mb: 10, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "flex-end" } }}>
        <Box>
          <Typography 
            sx={{ 
              color: "grey.500", 
              fontSize: "0.75rem", 
              fontWeight: 600, 
              letterSpacing: 4, 
              textTransform: "uppercase", 
              fontFamily: quicksand.style.fontFamily,
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 2
            }}
          >
            <Box component="span" sx={{ width: "40px", height: "2px", bgcolor: techBlue }} />
            System-Diagnose
          </Typography>

          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              fontFamily: quicksand.style.fontFamily, 
              fontSize: { xs: "2.5rem", md: "4.5rem" }, 
              letterSpacing: "-0.03em",
              lineHeight: 1.1
            }}
          >
            Tech <Box component="span" sx={{ color: "grey.600" }}>Arsenal</Box>.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: { xs: 4, md: 0 }, p: 2, border: "1px solid rgba(255,255,255,0.05)", bgcolor: "#0a0a0a" }}>
          <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", bgcolor: techBlue, position: "absolute", animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite", "@keyframes ping": { "75%, 100%": { transform: "scale(2.5)", opacity: 0 } } }} />
            <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", bgcolor: techBlue }} />
          </Box>
          <Typography sx={{ color: "grey.400", fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: 2, textTransform: "uppercase" }}>
            All Systems <Box component="span" sx={{ color: "white", fontWeight: "bold" }}>Operational</Box>
          </Typography>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, 
          gap: { xs: 3, md: 4 } 
        }}
      >
        {techArsenal.map((module, idx) => (
          <Box
            key={idx}
            sx={{
              bgcolor: "#080808",
              border: "1px solid rgba(255,255,255,0.05)",
              p: 4,
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "rgba(0, 191, 255, 0.3)",
                bgcolor: "#0a0a0a",
                transform: "translateY(-5px)",
                boxShadow: `0 15px 30px rgba(0, 191, 255, 0.05)`,
                "& .module-icon": { color: techBlue }
              }
            }}
          >
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "10px", height: "10px", borderTop: "2px solid rgba(255,255,255,0.2)", borderLeft: "2px solid rgba(255,255,255,0.2)" }} />
            <Box sx={{ position: "absolute", top: 0, right: 0, width: "10px", height: "10px", borderTop: "2px solid rgba(255,255,255,0.2)", borderRight: "2px solid rgba(255,255,255,0.2)" }} />
            <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "10px", height: "10px", borderBottom: "2px solid rgba(255,255,255,0.2)", borderLeft: "2px solid rgba(255,255,255,0.2)" }} />
            <Box sx={{ position: "absolute", bottom: 0, right: 0, width: "10px", height: "10px", borderBottom: "2px solid rgba(255,255,255,0.2)", borderRight: "2px solid rgba(255,255,255,0.2)" }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
              <Box>
                <Typography sx={{ color: "grey.600", fontSize: "0.65rem", fontFamily: "monospace", letterSpacing: 2, mb: 1 }}>
                  // {module.id}
                </Typography>
                <Typography variant="h6" sx={{ color: "white", fontWeight: 700, fontFamily: quicksand.style.fontFamily, letterSpacing: 1 }}>
                  {module.title}
                </Typography>
              </Box>
              <TerminalOutlinedIcon className="module-icon" sx={{ color: "grey.700", transition: "color 0.3s" }} />
            </Box>

            <Box sx={{ width: "100%", height: "1px", bgcolor: "rgba(255,255,255,0.05)", mb: 3 }} />

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {module.skills.map((skill, i) => (
                <Box 
                  key={i} 
                  sx={{ 
                    px: 1.5, 
                    py: 0.5, 
                    bgcolor: "rgba(255,255,255,0.03)", 
                    border: "1px solid rgba(255,255,255,0.05)", 
                    borderRadius: "2px", 
                    color: "grey.300", 
                    fontSize: "0.8rem", 
                    fontFamily: quicksand.style.fontFamily, 
                    fontWeight: 600, 
                    letterSpacing: 0.5, 
                    transition: "all 0.2s", 
                    "&:hover": { 
                      borderColor: techBlue, 
                      color: techBlue, 
                      bgcolor: "rgba(0, 191, 255, 0.05)" 
                    } 
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>

          </Box>
        ))}
      </Box>

    </Box>
  );
}