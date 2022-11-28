import React, { useRef, useEffect } from "react";
import { AppBar, Button, Typography, Box, styled } from "@mui/material";

export const NavigateToSection = (id: string) => {
    //window.scrollTo({top: window.innerHeight * position, behavior: 'smooth'})
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const TopBar = styled(AppBar)({
    opacity: 0,
    transition: '.5s',
    backgroundColor: '#222',
    //borderBottom: '1px solid #444',  
})

const TopMenu = () => {

    const barRef = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        const showTopBar = (e: Event) => {
            if (window.scrollY > window.innerHeight * 3 / 4) {
                barRef.current.style.opacity = '1'
            }
            else {
                barRef.current.style.opacity = '0'
            }
        }
        document.addEventListener('scroll', showTopBar)
        return () => document.removeEventListener('scroll', showTopBar)
    }, [])

    return (
        <TopBar position='fixed' ref={barRef}>
            {/* @ts-ignore */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: '5px 2vw', maxWidth: '1200px', margin: 'auto', width: '100%' }}>
                <Typography>Paweł Musioł</Typography>
                <Box>
                    <Button onClick={() => NavigateToSection('about')}>O Mnie</Button>
                    <Button onClick={() => NavigateToSection('projects')}>Projekty</Button>
                    <Button onClick={() => NavigateToSection('contact')}>Kontakt</Button>
                </Box>
            </Box>
        </TopBar>
    )
}

export default TopMenu