import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });

const slideUpAnimation = {
  "0%": { opacity: 0, transform: "translateY(60px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
};

const skillCategories = [
  {
    title: "Web & Frontend",
    skills: ["Next.js", "React", "TypeScript", "MUI", "Tailwind CSS", "HTML", "CSS", "JavaScript", "ShadCN", "ElectronJS"],
  },
  {
    title: "App & Backend",
    skills: ["Flutter", "Firebase", "Node.js", "Java", "Kotlin"],
  },
  {
    title: "Workflow & Tools",
    skills: ["AI-Assisted Dev", "Vercel", "Git",""],
  },
];

const myJourney = [
  {
    year: "2024 - 2025",
    title: "NIELIT 'O'",
    desc: "Persued O Level Course Offered by NIELIT - National Institute Of Electronics And Information Technology",
  },
  {
    year: "2026-2029",
    title: "Bachelor's Of Computer Application",
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
              textAlign: { xs: "center", md: "center" },
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
                opacity: 0,
                animation: "slideUp 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
                "@keyframes slideUp": slideUpAnimation,
                animationDelay: `${index * 0.2 + 0.1}s`,

                "&:hover": {
                  borderColor: "#df6830",
                  // textAlign: "",
                },
                "&:hover .slide-content": {
                  transform: "translateX(30px)",
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

              <Box
                className="slide-content"
                sx={{
                  pl: 2,
                  transition: "transform 0.3s ease",
                }}
              >
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
              textAlign: { xs: "center", md: "center" },
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
                opacity: 0,
                animation: "slideUp 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
                "@keyframes slideUp": slideUpAnimation,
                animationDelay: `${(index + myJourney.length) * 0.2 + 0.1}s`,

                "&:hover": {
                  borderColor: "#df6830",
                },
                "&:hover .slide-content": {
                  transform: "translateX(30px)",
                },
              }}
            >
              <Box
                className="slide-content"
                sx={{
                  transition: "transform 0.3s ease",
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
              </Box>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}