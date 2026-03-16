"use client";
import React from 'react';
import { Box, Typography, Button, Divider, Stack } from '@mui/material';
import { Quicksand } from 'next/font/google';

// Icons
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LaunchIcon from '@mui/icons-material/Launch';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const amgOrange = "#ff4d00"; 

// --- DUMMY DATA WITH IMAGES ---
const certifications = [
  { 
    id: "AWS-SA-2025", 
    title: "Getting Started With Dart", 
    issuer: "Google Cloud", 
    date: "MAR 2025",
    credentialId: "AWS-987654321",
    // Placeholder image - replace with your actual certificate screenshot
    image: "/flutter.png", 
    link: "#" 
  },
  { 
    id: "META-FE-2024", 
    title: "Introduction to Dart", 
    issuer: "Google Cloud", 
    date: "DEC 2024",
    credentialId: "META-123456789",
    image: "/dart.png", 
    link: "#" 
  }
];

export default function CertificationsSection() {
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
          <Box component="span" sx={{ width: '40px', height: '2px', bgcolor: amgOrange }} />
          Akkreditierungen
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
          Verified <Box component="span" sx={{ color: 'grey.600' }}>Credentials</Box>.
        </Typography>
      </Box>

      {/* ========================================= */}
      {/* EDITORIAL LIST SECTION */}
      {/* ========================================= */}
      <Stack spacing={6}>
        {certifications.map((cert, index) => (
          
          /* --- THE HORIZONTAL CARD --- */
          <Box 
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side-by-side on desktop
              bgcolor: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '2px', // Sharp industrial edges
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.15)',
                boxShadow: `0 15px 40px rgba(0,0,0,0.8)`,
                transform: 'translateY(-4px)',
                // Removes grayscale and zooms image slightly on hover
                // '& .cert-image': { filter: 'grayscale(0%)', transform: 'scale(1.05)' },
                '& .security-badge': { color: amgOrange }
              }
            }}
          >
            
            {/* --- LEFT: CERTIFICATE IMAGE SCAN --- */}
            <Box 
              sx={{ 
                width: { xs: '100%', md: '40%' }, 
                height: { xs: '250px', md: 'auto' }, // Fixed height on mobile, stretches to match content on desktop
                position: 'relative',
                borderRight: { xs: 'none', md: '1px solid rgba(255,255,255,0.05)' },
                borderBottom: { xs: '1px solid rgba(255,255,255,0.05)', md: 'none' },
                overflow: 'hidden',
                bgcolor: '#000'
              }}
            >
              {/* Image Background */}
              <Box 
                className="cert-image"
                sx={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(${cert.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                //   filter: 'grayscale(80%) brightness(0.7)',
                  transition: 'all 0.5s ease',
                }}
              />
              
              {/* Overlay Tag */}
              <Box sx={{ position: 'absolute', top: 16, left: 16, bgcolor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', px: 1.5, py: 0.5, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography sx={{ color: 'grey.300', fontSize: '0.6rem', letterSpacing: 2, fontFamily: 'monospace', textTransform: 'uppercase' }}>
                  [ DOKUMENT_SCAN ]
                </Typography>
              </Box>
            </Box>

            {/* --- RIGHT: CREDENTIALS DATA --- */}
            <Box sx={{ width: { xs: '100%', md: '60%' }, p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column' }}>
              
              {/* Top Security Row */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Typography sx={{ color: 'grey.500', fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: 2 }}>
                  REF // {cert.id}
                </Typography>
                <ShieldOutlinedIcon className="security-badge" sx={{ color: 'grey.600', fontSize: '1.2rem', transition: 'color 0.3s' }} />
              </Box>

              {/* Title & Issuer */}
              <Typography 
                variant="h4" 
                sx={{ color: 'white', fontWeight: 700, fontFamily: quicksand.style.fontFamily, mb: 1, fontSize: { xs: '1.4rem', md: '1.8rem' } }}
              >
                {cert.title}
              </Typography>
              <Typography sx={{ color: amgOrange, fontSize: '0.9rem', fontWeight: 600, fontFamily: quicksand.style.fontFamily, mb: 4, letterSpacing: 1, textTransform: 'uppercase' }}>
                {cert.issuer}
              </Typography>

              {/* Data Grid (Date & Credential ID) */}
              <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, mb: 4 }}>
                <Box>
                  <Typography sx={{ color: 'grey.600', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 2, fontFamily: 'monospace', mb: 0.5 }}>
                    Ausstellungsdatum (Date)
                  </Typography>
                  <Typography sx={{ color: 'grey.300', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'monospace' }}>
                    {cert.date}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: 'grey.600', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 2, fontFamily: 'monospace', mb: 0.5 }}>
                    Credential ID
                  </Typography>
                  <Typography sx={{ color: 'grey.300', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'monospace' }}>
                    {cert.credentialId}
                  </Typography>
                </Box>
              </Box>

              {/* Action Button */}
              <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <Button
                  href={cert.link}
                  target="_blank"
                  endIcon={<LaunchIcon sx={{ fontSize: '1rem !important' }} />}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '2px', // Sharp corners
                    px: 3, py: 1,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    fontFamily: quicksand.style.fontFamily,
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: 'white', color: 'black', borderColor: 'white' }
                  }}
                >
                  Verify Credential
                </Button>
              </Box>

            </Box>
          </Box>
        ))}
      </Stack>

    </Box>
  );
}