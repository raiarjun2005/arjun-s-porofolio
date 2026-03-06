"use client";
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Quicksand } from 'next/font/google';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const accentColor = "#00BFFF"; // Bavarian Tech Blue

// --- ACADEMIC DATA ---
const educationData = [
  {
    id: "EDU-01",
    degree: "Online Degree Program (BCA/MCA)", // 🔥 Edit this to your exact degree
    institution: "Manipal University Jaipur (Online)",
    year: "2023 - Present",
    status: "In Progress",
    description: "Focusing on advanced software engineering principles, modern web architectures, and scalable application development."
  },
  {
    id: "EDU-02",
    degree: "O-Level Certification (IT)",
    institution: "NIELIT (National Institute of Electronics & IT)",
    year: "2022 - 2023",
    status: "Completed",
    description: "Comprehensive foundation in Information Technology, covering programming concepts, web design, and systems architecture."
  },
  {
  //   id: "EDU-03",
  //   degree: "Higher Secondary / Bachelor's", // 🔥 Edit this to your Delhi college/school
  //   institution: "Delhi University / XYZ School", 
  //   year: "2020 - 2022",
  //   status: "Completed",
  //   description: "Core focus on Mathematics and Computer Science. Built a strong foundation in logical reasoning and computational thinking."
  // }
];

export default function EducationSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, px: { xs: 3, md: 8, lg: 12 }, bgcolor: '#050505', color: 'white' }}>
      
      {/* ========================================= */}
      {/* HEADER SECTION */}
      {/* ========================================= */}
      <Box sx={{ mb: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography 
          sx={{ 
            color: 'grey.500', 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            letterSpacing: 4, 
            textTransform: 'uppercase', 
            fontFamily: quicksand.style.fontFamily,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box component="span" sx={{ width: '40px', height: '2px', bgcolor: accentColor }} />
          Bildungsweg
        </Typography>

        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 700, 
            fontFamily: quicksand.style.fontFamily, 
            fontSize: { xs: '2.5rem', md: '4.5rem' }, 
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}
        >
          Academic <Box component="span" sx={{ color: 'grey.600' }}>Blueprint</Box>.
        </Typography>
      </Box>

      {/* ========================================= */}
      {/* TIMELINE SECTION */}
      {/* ========================================= */}
      <Box sx={{ position: 'relative', pl: { xs: 2, md: 4 } }}>
        
        {/* The Main Vertical Line (The Chassis Frame) */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: { xs: '24px', md: '48px' }, // Aligns with the dots
            width: '2px', 
            bgcolor: 'rgba(255,255,255,0.05)',
            zIndex: 0
          }} 
        />

        <Stack spacing={8}>
          {educationData.map((edu, index) => (
            <Box 
              key={index} 
              sx={{ 
                position: 'relative', 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: { xs: 3, md: 6 },
                zIndex: 1 
              }}
            >
              
              {/* --- TIMELINE NODE (The Dot & Year) --- */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: { xs: '100%', md: '200px' }, flexShrink: 0 }}>
                {/* Node Dot */}
                <Box 
                  sx={{ 
                    width: '16px', 
                    height: '16px', 
                    borderRadius: '2px', // Sharp box instead of circle
                    bgcolor: '#0a0a0a', 
                    border: `2px solid ${accentColor}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: `0 0 15px rgba(0, 191, 255, 0.2)`
                  }} 
                >
                  <Box sx={{ width: '4px', height: '4px', bgcolor: accentColor }} />
                </Box>
                
                {/* Year */}
                <Typography sx={{ color: 'white', fontFamily: 'monospace', fontWeight: 600, fontSize: '1rem', letterSpacing: 1 }}>
                  {edu.year}
                </Typography>
              </Box>

              {/* --- ACADEMIC CARD --- */}
              <Box 
                sx={{ 
                  flexGrow: 1,
                  bgcolor: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '2px', // Sharp corners
                  p: { xs: 3, md: 4 },
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-4px)',
                    boxShadow: `0 15px 40px rgba(0,0,0,0.5)`,
                    '& .edu-icon': { color: accentColor },
                    '& .status-tag': { bgcolor: 'rgba(0,191,255,0.1)', color: accentColor, borderColor: accentColor }
                  }
                }}
              >
                {/* Connecting horizontal line (Desktop only) */}
                <Box 
                  sx={{ 
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute', 
                    left: '-24px', 
                    top: '50%', 
                    width: '24px', 
                    height: '2px', 
                    bgcolor: 'rgba(255,255,255,0.05)',
                    zIndex: -1
                  }} 
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography sx={{ color: 'grey.500', fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: 2, mb: 1 }}>
                      [ REF: {edu.id} ]
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, fontFamily: quicksand.style.fontFamily, mb: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography sx={{ color: accentColor, fontSize: '0.9rem', fontWeight: 600, fontFamily: quicksand.style.fontFamily, textTransform: 'uppercase', letterSpacing: 1 }}>
                      {edu.institution}
                    </Typography>
                  </Box>

                  <SchoolOutlinedIcon className="edu-icon" sx={{ color: 'grey.700', fontSize: '2rem', transition: 'color 0.3s' }} />
                </Box>

                <Typography sx={{ color: 'grey.400', fontSize: '0.95rem', fontFamily: quicksand.style.fontFamily, lineHeight: 1.6, mb: 3 }}>
                  {edu.description}
                </Typography>

                <Box 
                  className="status-tag"
                  sx={{ 
                    display: 'inline-block',
                    px: 2, 
                    py: 0.5, 
                    bgcolor: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '2px',
                    color: 'grey.400',
                    fontSize: '0.7rem',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  Status // {edu.status}
                </Box>

              </Box>

            </Box>
          ))}
        </Stack>
      </Box>

    </Box>
  );
}