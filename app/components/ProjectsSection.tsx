"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Chip, Button, Dialog, DialogContent, Slide, IconButton } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Quicksand } from "next/font/google";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const amgOrange = "#00BFFF";

// --- Data with Image Placeholders added ---
const myProjects = [
  {
    id: "001",
    name: "Khewra FPO",
    desc: "Dedicated to enhancing farmer profitability through sustainable practices and efficient value chains.",
    techStack: ["Next.js", "Tailwind"],
    image: "/khewra.png", // Replace with your SS
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
    image: "/imp.png", // Replace with your SS
    specs: {
      obstacle: "Building a premium e-commerce experience that handles high-res product catalogs without compromising on load times or mobile responsiveness.",
      architecture: "Customized the Shopify Liquid architecture to strip away redundant scripts. Optimized the checkout funnel and integrated dynamic inventory rendering for real-time stock updates.",
      output: "A sleek, conversion-optimized storefront that provides a frictionless shopping experience, matching the brand's premium identity."
    }
  },
  {
    id: "003",
    name: "Docloom",
    desc: "A collaborative digital workspace and real-time PDF customizer.",
    techStack: ["Next.js", "Firebase", "UI/UX"],
    image: "/docloom.png", // Replace with your SS
    specs: {
      obstacle: "Creating a seamless collaborative environment where users can interact with real-time data syncing without encountering race conditions or data overlap.",
      architecture: "Integrated Firebase real-time database with a Next.js frontend. Structured the data nodes to handle concurrent read/writes efficiently, paired with a highly intuitive UI/UX design.",
      output: "A fluid, real-time collaborative workspace that updates instantaneously, providing users with a zero-latency digital experience."
    }
  },
  {
    id: "004",
    name: "SnapGro",
    desc: "High-speed grocery application with an edge-cached catalog.",
    techStack: ["React", "Tailwind", "Vercel"],
    image: "/snp.png", // Replace with your SS
    specs: {
      obstacle: "Deploying a highly visual e-commerce catalog that requires rapid updates and instant content delivery across global edge networks.",
      architecture: "Built a modular React single-page application (SPA) styled with Tailwind for component consistency. Configured automated CI/CD pipelines through Vercel for instant deployments.",
      output: "A lightning-fast web app with edge-caching, ensuring that product images and details load instantly regardless of the user's geographic location."
    }
  },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any>; },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleOpenSpecs = (project: any) => setSelectedProject(project);
  const handleCloseSpecs = () => setSelectedProject(null);

  return (
    <Box id="projects-section" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 4, lg: 10 }, bgcolor: "#030303" }}>
      
      {/* SECTION HEADER */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ color: "grey.600", letterSpacing: 4, mb: 2, fontSize: { xs: "0.75rem", md: "0.85rem" }, textTransform: "uppercase", fontFamily: quicksand.style.fontFamily, fontWeight: 600 }}>
          Featured Works
        </Typography>
        <Typography variant="h2" sx={{ color: "white", fontFamily: quicksand.style.fontFamily, fontWeight: "bold", fontSize: { xs: "2.5rem", md: "4rem" }, letterSpacing: '-0.02em' }}>
          My <Box component="span" sx={{ color: amgOrange }}>Playground</Box>
        </Typography>
      </Box>

      {/* PROJECT GRID */}
      <Grid container spacing={5}>
        {myProjects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            
            {/* THE CARD */}
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#0a0a0a",
                borderRadius: "32px", // Elegant curve, not too bubbly
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
                height: "100%",
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden", // Important so image doesn't spill out
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                
                // Card Hover Effects
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,77,0,0.05)`,
                  // Image Zoom
                  "& .project-thumbnail": { transform: "scale(1.05)" },
                  // Button Arrow Slide
                  "& .view-button-icon": { transform: "translateX(4px)", color: amgOrange }
                },
              }}
              onClick={() => handleOpenSpecs(project)} // Makes entire card clickable
            >
              
              {/* --- TOP HALF: IMAGE THUMBNAIL --- */}
              <Box sx={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <Box 
                  className="project-thumbnail"
                  sx={{ 
                    width: '100%', height: '100%', 
                    backgroundImage: `url(${project.image})`, 
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: "transform 0.6s ease",
                  }} 
                />
                
                {/* Overlay Gradient (darkens the bottom of the image slightly) */}
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 0%, transparent 50%)' }} />

                {/* Glassmorphic Log Badge floating on image */}
                <Box sx={{ position: 'absolute', top: 20, left: 20, display: "flex", alignItems: "center", bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', px: 1.5, py: 0.5, borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", bgcolor: amgOrange, mr: 1, boxShadow: `0 0 8px ${amgOrange}` }} />
                  <Typography sx={{ color: "grey.300", fontSize: "0.65rem", letterSpacing: 2, fontFamily: quicksand.style.fontFamily, fontWeight: "bold" }}>
                    LOG: {project.id}
                  </Typography>
                </Box>
              </Box>

              {/* --- BOTTOM HALF: CONTENT --- */}
              <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <Typography variant="h4" sx={{ color: "white", fontFamily: quicksand.style.fontFamily, mb: 1.5, fontWeight: "bold", fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
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
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.03)", color: "grey.300", fontFamily: quicksand.style.fontFamily, fontWeight: 600, border: `1px solid rgba(255, 255, 255, 0.1)`, borderRadius: "6px", letterSpacing: 0.5
                      }}
                    />
                  ))}
                </Box>

                {/* Sleek View Button */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', pt: 2, mt: 'auto' }}>
                  <Typography sx={{ color: 'grey.300', fontFamily: quicksand.style.fontFamily, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Inspect
                  </Typography>
                  <ArrowForwardRoundedIcon className="view-button-icon" sx={{ color: 'grey.500', transition: 'all 0.3s ease' }} />
                </Box>

              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* ========================================= */}
      {/* THE MODAL: ENGINEERING SPECS */}
      {/* ========================================= */}
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