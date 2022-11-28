import React from "react";
import { AppBar, Button, Typography, Box } from "@mui/material";

export const NavigateToSection = (id:string) => {
    //window.scrollTo({top: window.innerHeight * position, behavior: 'smooth'})
    let element = document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
}

const TopMenu = () => {   

    return (
        <AppBar position='fixed' sx={{background: 'rgba(0,0,0,.3)'}}>
            {/* @ts-ignore */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Typography>Paweł Musioł</Typography>
                <Box>
                    <Button onClick={() => NavigateToSection('about')}>O Mnie</Button>
                    <Button onClick={() => NavigateToSection('projects')}>Projekty</Button>
                    <Button onClick={() => NavigateToSection('contact')}>Kontakt</Button>
                </Box>
            </Box>
        </AppBar>
    )
}

export default TopMenu