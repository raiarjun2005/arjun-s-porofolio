"use client";
import React from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Quicksand, Oswald } from 'next/font/google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import EastIcon from '@mui/icons-material/East';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['700'] });
const amgOrange = "#00BFFF"; 

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#050505',
        color: 'white',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute', right: '-10%', top: '20%', 
          width: '50vw', height: '50vw', 
          background: `radial-gradient(circle, rgba(255, 77, 0, 0.03) 0%, transparent 60%)`, 
          zIndex: -1 
        }} 
      />

      <Stack 
        direction="row" 
        justifyContent="space-between" 
        sx={{ position: 'absolute', top: 40, left: { xs: 24, md: 80 }, right: { xs: 24, md: 80 }, zIndex: 2 }}
      >
        <Typography sx={{ color: 'grey.600', fontSize: '0.65rem', letterSpacing: 3, fontFamily: 'monospace', textTransform: 'uppercase' }}>
          System_Status: <Box component="span" sx={{ color: amgOrange }}>Bereit</Box>
        </Typography>
        <Typography sx={{ color: 'grey.600', fontSize: '0.65rem', letterSpacing: 3, fontFamily: 'monospace', textTransform: 'uppercase' }}>
          Standort // Neu-Delhi
        </Typography>
      </Stack>

      <Box 
        sx={{ 
          ml: { xs: 3, md: 10, lg: 15 },
          maxWidth: '800px',
          borderLeft: `3px solid ${amgOrange}`,
          pl: { xs: 3, md: 5 },
          zIndex: 2,
        }}
      >
        <Typography 
          sx={{ 
            color: 'grey.400', 
            fontSize: { xs: '0.75rem', md: '0.85rem' }, 
            fontWeight: 600, 
            letterSpacing: 4, 
            textTransform: 'uppercase', 
            fontFamily: quicksand.style.fontFamily,
            mb: 2
          }}
        >
          Ingenieurskunst & Softwareentwicklung
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontFamily: quicksand.style.fontFamily,
            fontSize: { xs: '4rem', md: '7rem', lg: '8.5rem' },
            lineHeight: 1,
            letterSpacing: '-0.03em',
            mb: 2,
            ml: -0.5
          }}
        >
          ARJUN<Box component="span" sx={{ color: amgOrange }}>.</Box>
        </Typography>

        <Typography 
          sx={{ 
            color: 'white', 
            fontSize: { xs: '1rem', md: '1.25rem' }, 
            fontWeight: 600, 
            letterSpacing: 1, 
            fontFamily: quicksand.style.fontFamily,
            mb: 2
          }}
        >
          Digitale Handwerkskunst. <Box component="span" sx={{ color: 'grey.600', fontWeight: 400 }}>(Digital Craftsmanship)</Box>
        </Typography>

        <Typography
          sx={{
            color: 'grey.400',
            lineHeight: 1.8,
            fontFamily: quicksand.style.fontFamily,
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            maxWidth: '600px',
            mb: 5
          }}
        >
          I build high-performance, scalable applications with a strict focus on robust architecture and minimalist design. Driven by German precision, engineered for the modern web.
        </Typography>

        <Button
          onClick={() => {
            document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          endIcon={<EastIcon sx={{ ml: 1, fontSize: '1.2rem !important', transition: 'transform 0.3s ease' }} />}
          sx={{ 
            bgcolor: 'white',
            color: 'black',
            borderRadius: 0,
            px: { xs: 4, md: 5 }, 
            py: { xs: 1.5, md: 1.8 }, 
            fontWeight: 700, 
            fontSize: '0.85rem',
            letterSpacing: 2,
            fontFamily: quicksand.style.fontFamily,
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: amgOrange,
              color: 'white',
              '& .MuiButton-endIcon': { transform: 'translateX(5px)' }
            }
          }}
        >
          Projekte Ansehen
        </Button>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'absolute',
          right: '16%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: oswald.style.fontFamily,
            fontSize: '8rem',
            color: '#00BFFF',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            letterSpacing: '10px',
            whiteSpace: 'pre-line',
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 0.6,
          }}
        >
          Präzision{'\n'}& Stil
        </Typography>
      </Box>

      <Stack 
        direction="row" 
        spacing={2} 
        sx={{ position: 'absolute', bottom: 40, left: { xs: 24, md: 80 }, zIndex: 2 }}
      >
        {[
          { icon: <GitHubIcon fontSize="small" />, link: '#' },
          { icon: <LinkedInIcon fontSize="small" />, link: '#' },
          { icon: <EmailIcon fontSize="small" />, link: '#' }
        ].map((social, index) => (
          <IconButton 
            key={index}
            sx={{ 
              color: 'grey.500', 
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: 0,
              p: 1.2,
              transition: 'all 0.2s',
              '&:hover': { color: 'white', borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } 
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Stack>

      <Typography
        sx={{
          position: 'absolute',
          right: -20,
          bottom: -40,
          fontSize: { xs: '10rem', md: '25rem' },
          fontWeight: 700,
          color: 'rgba(255,255,255,0.02)',
          fontFamily: quicksand.style.fontFamily,
          lineHeight: 0.8,
          pointerEvents: 'none',
          zIndex: -1,
          userSelect: 'none'
        }}
      >
        63
      </Typography>
    </Box>
  );
}