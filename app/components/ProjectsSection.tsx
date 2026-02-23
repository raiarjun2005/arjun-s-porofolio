"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Chip, Button, Dialog, DialogContent, Slide, IconButton } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["500", "700"] });
const amgOrange = "#ff4d00";

const myProjects = [
  {
    id: "001",
    name: "Khewra FPO",
    desc: "Khewra Farmers Producer Co. Ltd. is dedicated to enhancing farmer profitability through sustainable practices, modern inputs, and efficient value chains.",
    techStack: ["Next.js", "Tailwind"],
    specs: {
      obstacle: "Digitizing a traditional Farmer Producer Organization (FPO). The challenge was to create an interface that is extremely fast, accessible, and not intimidating for users transitioning from offline to digital supply chains.",
      architecture: "Engineered a highly responsive frontend using Next.js for fast server-side rendering (SSR) and SEO. Utilized Tailwind CSS to rapidly prototype and scale the UI components without bloat.",
      output: "Delivered a scalable, high-performance web platform that bridges the gap between modern agricultural inputs and local farmers, streamlining their digital value chain."
    }
  },
  {
    id: "002",
    name: "IMPEXMART",
    desc: "Modern e-commerce store and clothing brand with a high-end product catalog.",
    techStack: ["Shopify", "Liquid"],
    specs: {
      obstacle: "Building a premium e-commerce experience that handles high-res product catalogs without compromising on load times or mobile responsiveness.",
      architecture: "Customized the Shopify Liquid architecture to strip away redundant scripts. Optimized the checkout funnel and integrated dynamic inventory rendering for real-time stock updates.",
      output: "A sleek, conversion-optimized storefront that provides a frictionless shopping experience, matching the brand's premium identity."
    }
  },
  {
    id: "003",
    name: "Docloom",
    desc: "A collaborative digital experience project.",
    techStack: ["Next.js", "Firebase", "UI/UX"],
    specs: {
      obstacle: "Creating a seamless collaborative environment where users can interact with real-time data syncing without encountering race conditions or data overlap.",
      architecture: "Integrated Firebase real-time database with a Next.js frontend. Structured the data nodes to handle concurrent read/writes efficiently, paired with a highly intuitive UI/UX design.",
      output: "A fluid, real-time collaborative workspace that updates instantaneously, providing users with a zero-latency digital experience."
    }
  },
  {
    id: "004",
    name: "SnapGro",
    desc: "Modern e-commerce store and clothing brand with high-end product catalog.",
    techStack: ["React", "Tailwind", "Vercel"],
    specs: {
      obstacle: "Deploying a highly visual e-commerce catalog that requires rapid updates and instant content delivery across global edge networks.",
      architecture: "Built a modular React single-page application (SPA) styled with Tailwind for component consistency. Configured automated CI/CD pipelines through Vercel for instant deployments.",
      output: "A lightning-fast web app with edge-caching, ensuring that product images and details load instantly regardless of the user's geographic location."
    }
  },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleOpenSpecs = (project: any) => setSelectedProject(project);
  const handleCloseSpecs = () => setSelectedProject(null);

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 4, lg: 10 }, bgcolor: "#050505" }}>
      
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ color: "grey.600", letterSpacing: 4, mb: 2, fontSize: { xs: "0.8rem", md: "1rem" }, textTransform: "uppercase", fontFamily: quicksand.style.fontFamily }}>
          Active Prototypes
        </Typography>
        <Typography variant="h2" sx={{ color: "white", fontFamily: quicksand.style.fontFamily, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" } }}>
          My <Box component="span" sx={{ color: amgOrange }}>Playground</Box>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {myProjects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Paper
              sx={{
                p: { xs: 4, md: 5 },
                bgcolor: "#0a0a0a",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
                "&:hover": {
                  borderColor: amgOrange,
                  transform: "translateY(-5px)",
                  boxShadow: `0 15px 40px rgba(255, 77, 0, 0.1)`,
                  "& .engine-light": { bgcolor: amgOrange, boxShadow: `0 0 10px ${amgOrange}` }
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box className="engine-light" sx={{ width: "8px", height: "8px", borderRadius: "50%", bgcolor: "#333", mr: 2, transition: "0.3s" }} />
                <Typography sx={{ color: "grey.500", fontSize: "0.8rem", letterSpacing: 2, fontFamily: quicksand.style.fontFamily, fontWeight: "bold" }}>
                  [ LOG: {project.id} ]
                </Typography>
              </Box>

              <Typography variant="h4" sx={{ color: "white", fontFamily: quicksand.style.fontFamily, mb: 2, fontWeight: "bold" }}>
                {project.name}
              </Typography>

              <Typography sx={{ color: "grey.400", mb: 4, flexGrow: 1, fontFamily: quicksand.style.fontFamily, fontSize: "0.95rem", lineHeight: 1.6 }}>
                {project.desc}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
                {project.techStack.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    sx={{
                      bgcolor: "rgba(255, 77, 0, 0.05)",
                      color: amgOrange,
                      fontFamily: quicksand.style.fontFamily,
                      fontWeight: "bold",
                      border: `1px solid rgba(255, 77, 0, 0.2)`,
                      borderRadius: "8px"
                    }}
                  />
                ))}
              </Box>

              <Button 
                onClick={() => handleOpenSpecs(project)}
                fullWidth
                sx={{
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  py: 1.5,
                  fontFamily: quicksand.style.fontFamily,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  transition: "all 0.3s",
                  "&:hover": { bgcolor: amgOrange, borderColor: amgOrange, color: "black" }
                }}
              >
                View
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedProject)}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseSpecs}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "#0a0a0a",
            backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 10px)",
            border: `1px solid ${amgOrange}`,
            borderRadius: "24px",
            boxShadow: `0 20px 60px rgba(0,0,0,0.9), inset 0 2px 10px rgba(255,77,0,0.1)`,
            m: 2
          }
        }}
      >
        {selectedProject && (
          <DialogContent sx={{ p: { xs: 3, md: 6 }, position: "relative" }}>
            
            <IconButton 
              onClick={handleCloseSpecs} 
              sx={{ position: "absolute", top: 16, right: 16, color: "grey.500", "&:hover": { color: amgOrange, transform: "rotate(90deg)" }, transition: "0.3s" }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", fontFamily: quicksand.style.fontFamily }}>X</Typography> 
            </IconButton>

            <Typography sx={{ color: amgOrange, letterSpacing: 2, fontSize: "0.8rem", fontWeight: "bold", mb: 1, fontFamily: quicksand.style.fontFamily }}>
              [ DIAGNOSTIC REPORT: {selectedProject.id} ]
            </Typography>
            <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 2, fontFamily: quicksand.style.fontFamily }}>
              {selectedProject.name}
            </Typography>
            
            <Box sx={{ display: "flex", gap: 1, mb: 6, flexWrap: "wrap" }}>
              {selectedProject.techStack.map((tech: string, i: number) => (
                 <Chip key={i} label={tech} size="small" sx={{ bgcolor: "rgba(255,255,255,0.05)", color: "grey.300", fontFamily: quicksand.style.fontFamily, border: "1px solid rgba(255,255,255,0.1)" }} />
              ))}
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5 }}>
              
              <Box sx={{ flex: 1 }}>
                <Box sx={{ borderTop: `2px solid ${amgOrange}`, pt: 2 }}>
                  <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem", mb: 2, fontFamily: quicksand.style.fontFamily }}>
                    1. The Obstacle
                  </Typography>
                  <Typography sx={{ color: "grey.400", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: quicksand.style.fontFamily }}>
                    {selectedProject?.specs?.obstacle}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ borderTop: `2px solid #444`, pt: 2, transition: "0.3s", "&:hover": { borderTopColor: "white" } }}>
                  <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem", mb: 2, fontFamily: quicksand.style.fontFamily }}>
                    2. The Architecture
                  </Typography>
                  <Typography sx={{ color: "grey.400", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: quicksand.style.fontFamily }}>
                    {selectedProject?.specs?.architecture}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ borderTop: `2px solid #444`, pt: 2, transition: "0.3s", "&:hover": { borderTopColor: "white" } }}>
                  <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1.1rem", mb: 2, fontFamily: quicksand.style.fontFamily }}>
                    3. The Output
                  </Typography>
                  <Typography sx={{ color: "grey.400", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: quicksand.style.fontFamily }}>
                    {selectedProject?.specs?.output}
                  </Typography>
                </Box>
              </Box>

            </Box>

          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
}