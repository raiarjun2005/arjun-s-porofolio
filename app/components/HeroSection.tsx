import React from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Quicksand } from 'next/font/google';

// Icons import kar rahe hain
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['500', '600', '700'] });

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
                px: 2
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: '#gray.500',
                    fontWeight: 'light',
                    mt: 2,
                    textAlign: 'center',
                    fontFamily: quicksand.style.fontFamily
                }}
            >
                Welcome To My Space
            </Typography>

            <Typography
                variant="h1"
                sx={{
                    color: '#df6830',
                    fontWeight: 'bold',
                    mt: 2,
                    textAlign: 'center',
                    fontFamily: quicksand.style.fontFamily
                }}
            >
                I Build Digital Experiences
            </Typography>

           
            <Typography
                sx={{
                    color: 'grey.400',
                    maxWidth: '600px', 
                    textAlign: 'center',
                    mt: 3,
                    mb: 4, 
                    fontFamily: quicksand.style.fontFamily,
                    fontSize: '1.1rem',
                    lineHeight: 1.6
                }}
            >
                Crafting elegant digital solutions through innovative web applications and intelligent systems.
            </Typography>

            <Button
                variant="contained"
                sx={{ 
                    bgcolor: '#df6830',
                    color: 'white',
                    borderRadius: '30px', 
                    px: 4, 
                    py: 1.5, 
                    fontWeight: 'bold', 
                    fontFamily: quicksand.style.fontFamily,
                    
                    boxShadow: '0px 4px 20px rgba(223, 104, 48, 0.4)', 
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        bgcolor: '#c25725',
                        boxShadow: '0px 6px 25px rgba(223, 104, 48, 0.6)',
                        transform: 'translateY(-2px)'
                    }
                }}
            >
                Explore My Work
            </Button>

           
            <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                <IconButton sx={{ color: 'grey.600', transition: 'all 0.3s ease', '&:hover': { color: '#df6830', transform: 'translateY(-3px)' } }}>
                    <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: 'grey.600', transition: 'all 0.3s ease', '&:hover': { color: '#df6830', transform: 'translateY(-3px)' } }}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: 'grey.600', transition: 'all 0.3s ease', '&:hover': { color: '#df6830', transform: 'translateY(-3px)' } }}>
                    <EmailIcon />
                </IconButton>
            </Stack>

        </Box>
    );
}