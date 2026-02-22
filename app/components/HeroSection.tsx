"use client";

import React from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Quicksand } from 'next/font/google';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['500', '600', '700'] });

const pulse = {
    '0%': { boxShadow: '0 0 0 0px rgba(76, 175, 80, 0.7)' },
    '70%': { boxShadow: '0 0 0 10px rgba(76, 175, 80, 0)' },
    '100%': { boxShadow: '0 0 0 0px rgba(76, 175, 80, 0)' },
};

export default function HeroSection() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `
                    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 12px),
                    linear-gradient(to bottom left, #262626 0%, #0d0d0d 50%, #000000 100%)
                `,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 3, md: 2 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50px',
                    px: 2,
                    py: 0.5,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <Box 
                    sx={{ 
                        width: 8, height: 8, 
                        bgcolor: '#4caf50', 
                        borderRadius: '50%',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': pulse
                    }} 
                />
                <Typography sx={{ color: 'grey.400', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: quicksand.style.fontFamily }}>
                    Available for new projects
                </Typography>
            </Box>

            <Typography variant="h6" sx={{ color: 'grey.600', letterSpacing: 3, mb: 1, fontSize: '0.9rem', fontFamily: quicksand.style.fontFamily }}>
                WELCOME TO MY SPACE
            </Typography>

            <Typography
                variant="h1"
                sx={{
                    fontWeight: 800,
                    textAlign: 'center',
                    fontFamily: quicksand.style.fontFamily,
                    fontSize: { xs: '3.8rem', md: '6.5rem' },
                    lineHeight: 1,
                    mb: 2
                }}
            >
                <Box component="span" sx={{ color: 'white' }}>Rai</Box>
                <Box component="span" sx={{ color: '#df6830', textShadow: '0px 0px 15px rgba(223, 104, 48, 0.3)' }}>63.</Box>
            </Typography>

            <Typography
                sx={{
                    color: 'grey.400',
                    maxWidth: '550px',
                    textAlign: 'center',
                    lineHeight: 1.8,
                    mb: 5,
                    fontFamily: quicksand.style.fontFamily,
                    fontSize: { xs: '0.95rem', md: '1.1rem' }
                }}
            >
                Engineering scalable web and mobile applications <br /> 
                that solve real-world problems.
            </Typography>

            <Button
                variant="contained"
                sx={{ 
                    bgcolor: '#df6830',
                    color: 'white',
                    borderRadius: '50px', 
                    px: { xs: 4, md: 6 }, 
                    py: { xs: 1.5, md: 2 }, 
                    fontWeight: 'bold', 
                    fontSize: '1rem',
                    fontFamily: quicksand.style.fontFamily,
                    boxShadow: '0px 8px 25px rgba(223, 104, 48, 0.4)', 
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    textTransform: 'none',
                    '&:hover': {
                        bgcolor: '#c25725',
                        boxShadow: '0px 12px 35px rgba(223, 104, 48, 0.6)',
                        transform: 'translateY(-4px)'
                    }
                }}
            >
                Explore My Work
            </Button>

            <Stack direction="row" spacing={4} sx={{ mt: { xs: 6, md: 8 } }}>
                {[
                    { icon: <GitHubIcon />, link: '#' },
                    { icon: <LinkedInIcon />, link: '#' },
                    { icon: <EmailIcon />, link: '#' }
                ].map((social, index) => (
                    <IconButton 
                        key={index}
                        sx={{ 
                            color: 'grey.700', 
                            transition: 'all 0.3s ease', 
                            '&:hover': { color: 'white', transform: 'scale(1.2)' } 
                        }}
                    >
                        {social.icon}
                    </IconButton>
                ))}
            </Stack>
        </Box>
    );
}