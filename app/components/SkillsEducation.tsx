import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });

const skillCategories = [
  { 
    title: "Web & Frontend", 
    skills: ["Next.js", "React", "TypeScript", "MUI", "Tailwind CSS"] 
  },
  { 
    title: "App & Backend", 
    skills: ["Flutter", "Firebase", "Node.js"] 
  },
  { 
    title: "Workflow & Tools", 
    skills: ["AI-Assisted Dev", "Vercel", "Git"] 
  }
];

const myJourney = [
 
   {
    year: "2024 - 2025",
    title: "NIELIT 'O' ",
    desc: "Persued O Level Course Offered by NIELIT - National Institute Of Electronics And Information Technology",
  },
  {
    year: "2026-2029",
    title: "Bachelor's Of Computer Application ",
    desc: "Persuing Bachelor Of Computer Applications From Manipal University-Jaipur In Online Mode",
  },
];

export default function SkillsEducation() {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 10 }, bgcolor: "#0a0a0a" }}>
      <Grid container spacing={4}>
   
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: quicksand.style.fontFamily,
              mb: 4,
              fontWeight: "bold",
            }}
          >
            My Journey
          </Typography>

          {myJourney.map((item, index) => (
            <Paper
              key={index}
              sx={{
                p: 3,
                mb: 3,
                bgcolor: "#121212",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",

                "&:hover": {
                  borderColor: "#df6830",
                  textAlign: "center",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
            
                  bgcolor: "#df6830",
                }}
              />

              
              <Box sx={{ pl: 2 }}>
                <Typography
                  sx={{
                    color: "#df6830",
                    fontSize: "0.9rem",
                    mb: 1,
                    fontFamily: quicksand.style.fontFamily,
                    fontWeight: "bold",
                  }}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: quicksand.style.fontFamily,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "grey.500",
                    fontFamily: quicksand.style.fontFamily,
                    fontSize: "0.95rem",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Grid>

       
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: quicksand.style.fontFamily,
              mb: 4,
              fontWeight: "bold",
            }}
          >
            Tech Arsenal
          </Typography>

        
          {skillCategories.map((category, index) => (
            <Paper
              key={index}
              sx={{
                p: 3,
                mb: 3, 
                bgcolor: "#121212",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.3s ease",

                "&:hover": {
                  borderColor:'#df6830'
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: quicksand.style.fontFamily,
                  mb: 2,
                  fontWeight: "bold",
                }}
              >
                {category.title}
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                {category.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    sx={{
                      px: 1,
                      py: 2,
                      bgcolor: "rgba(255,255,255,0.03)",
                      color: "grey.300",
                      fontFamily: quicksand.style.fontFamily,
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",

                   
                      "&:hover": {
                        borderColor: "#df6830",
                        color: "#ff1744",
                        transform: "translateY(-3px)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
