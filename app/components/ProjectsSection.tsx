import React from "react";
import { Box, Typography, Grid, Paper, Chip } from "@mui/material";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["600"] });

const myProjects = [
  {
    name: "Khewra FPO",
    desc: "Khewra Farmers Producer Co. Ltd. is dedicated to enhancing farmer profitability through sustainable practices, modern inputs, and efficient value chains.",
    techStack: ["Next.js", "Tailwind"],
  },
  {
    name: "IMPEXMART",
    desc: "Porter-style local bike delivery app limited to Delhi with a complete rider KYC system.",
    techStack: ["Shopify", "Liquid"],
  },
  {
    name: "SnapGro",
    desc: "Modern e-commerce store and clothing brand with high-end product catalog.",
    techStack: ["React", "Tailwind", "Vercel"],
  },
  {
    name: "Docloom",
    desc: "A collaborative digital experience project.",
    techStack: ["NextJs", "Firebase", "UI/UX"],
  },
];

export default function ProjectsSection() {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 10 }, bgcolor: "#0a0a0a" }}>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontFamily: quicksand.style.fontFamily,
          mb: 6,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        My Playground
      </Typography>

      <Grid container spacing={4}>
        {myProjects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Paper
              sx={{
                p: 4,
                bgcolor: "#121212",
                borderRadius: "74px",
                border: "1px solid rgba(255,255,255,0.05)",
                height: "100%",
                transition: "border-color 0.3s ease",

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
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              > 
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    fontFamily: quicksand.style.fontFamily,
                    mb: 2,
                    fontWeight: "bold",
                  }}
                >
                  {project.name}
                </Typography>

                <Typography
                  sx={{
                    color: "grey.500",
                    mb: 4,
                    flexGrow: 1,
                    fontFamily: quicksand.style.fontFamily,
                  }}
                >
                  {project.desc}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {project.techStack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "#df6830",
                        fontFamily: quicksand.style.fontFamily,
                        border: "1px solid #df6830", 
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
