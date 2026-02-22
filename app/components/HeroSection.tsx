import React from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import { Quicksand } from 'next/font/google';

// Icons
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
                px: { xs: 3, md: 2 }
            }}
        >

            <Box
                sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '50px',
                    px: 2,
                    py: 0.5,
                    mb: 3, 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    boxShadow: '0px 0px 20px rgba(0,0,0,0.3)'
                }}
            >
                <Box sx={{ width: 8, height: 8, bgcolor: '#4caf50', borderRadius: '50%', boxShadow: '0 0 8px #4caf50' }} />
                <Typography sx={{ color: 'grey.400', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: quicksand.style.fontFamily }}>
                    Available for new projects
                </Typography>
            </Box>

            <Typography
                variant="h6"
                sx={{
                    color: 'grey.500',
                    fontWeight: 'light',
                   
                    textAlign: 'center',
                    fontFamily: quicksand.style.fontFamily,
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.85rem', md: '1.1rem' },
                    letterSpacing: { xs: 2, md: 3 }
                }}
            >
                Welcome To My Space
            </Typography>

            <Typography
                variant="h1"
                sx={{
                    fontWeight: 'bold',
                    mt: 1,
                    textAlign: 'center',
                    fontFamily: quicksand.style.fontFamily,
                    // Desktop font size badha kar 6rem kar diya hai
                    fontSize: { xs: '3.5rem', sm: '5rem', md: '6rem' }, 
                    lineHeight: 1.1,
                    letterSpacing: -1
                }}
            >
                {/* White aur Orange ka combo */}
                <Box component="span" sx={{ color: 'white' }}>Rai</Box>
                <Box component="span" sx={{ color: '#df6830' }}>63!</Box>
            </Typography>

            <Typography
                sx={{
                    color: 'grey.400',
                    maxWidth: '600px',
                    textAlign: 'center',
                    mt: { xs: 2, md: 3 },
                    mb: { xs: 3, md: 4 },
                    fontFamily: quicksand.style.fontFamily,
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    lineHeight: 1.6
                }}
            >
                Engineering scalable web and mobile applications that solve real-world problems.
            </Typography>

            <Button
                variant="contained"
                sx={{ 
                    bgcolor: '#df6830',
                    color: 'white',
                    borderRadius: '30px', 
                    px: { xs: 3, md: 4 }, 
                    py: { xs: 1.2, md: 1.5 }, 
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

            <Stack direction="row" spacing={3} sx={{ mt: { xs: 4, md: 5 } }}>
                <IconButton sx={{ color: 'grey.600', transition: 'all 0.3s ease', '&:hover': { color: 'white', transform: 'translateY(-3px)' } }}>
                    <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: 'grey.600', transition: 'all 0.3s ease', '&:hover': { color: 'white', transform: 'translateY(-3px)' } }}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: 'grey.600', transition: 'all 0.3s ease', '&:hover': { color: 'white', transform: 'translateY(-3px)' } }}>
                    <EmailIcon />
                </IconButton>
            </Stack>
        </Box>
    );
}