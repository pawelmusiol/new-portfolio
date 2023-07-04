import React, { useRef, useEffect, useContext, useState } from "react";
import { AppBar, Button, Typography, Box, styled } from "@mui/material";
import { LanguageContext } from "../../providers/context";
import { UKFlag, PolishFlag, Menu } from "../../images";
import { useMobile } from "../../hooks";
import MobileMenu from "./mobileMenu";

export const NavigateToSection = (id: string) => {
    //window.scrollTo({top: window.innerHeight * position, behavior: 'smooth'})
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const TopBar = styled(AppBar)({
    opacity: 0,
    transition: '.5s',
    backgroundColor: '#222',
    position: 'fixed',
    maxWidth: '100vw',
    left: 0,
    top: 0,
    //borderBottom: '1px solid #444',  
})

const OuterBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px 2vw',
    maxWidth: '1200px',
    margin: 'auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100vw',
    }

}))

const TopMenu = () => {

    const { State, setLanguage, setBlobPosition } = useContext(LanguageContext)
    const mobile = useMobile()
    const [OpenMenu, setOpenMenu] = useState(false)

    const ChangeLanguage = () => {
        if (State.Language == 'pl') setLanguage('en')
        else setLanguage('pl')
    }

    const onMenuOpen = () => {
        setOpenMenu(true)
        if (mobile) setBlobPosition('0vh')
    }
    const onMenuClose = () => {
        setTimeout(() => {
            setOpenMenu(false)
            if (mobile) setBlobPosition('0')
        },100)
    }

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
        if (mobile) barRef.current.style.opacity = '1'
        else {
            document.addEventListener('scroll', showTopBar)
            return () => document.removeEventListener('scroll', showTopBar)
        }
    }, [])

    return (
        <TopBar sx={{ zIndex: 10000 }} ref={barRef}>
            <OuterBox component='div'>
                <Typography sx={{color: '#FFDB58', fontSize: '1.6rem'}}>Paweł Musioł</Typography>
                <Box component='div'>
                    {!mobile ? <>
                        <Button onClick={() => NavigateToSection('about')}>{State.Language == 'pl' ? "O Mnie" : 'About'}</Button>
                        <Button onClick={() => NavigateToSection('projects')}>{State.Language == 'pl' ? "Projekty" : 'Projects'}</Button>
                        <Button onClick={() => NavigateToSection('contact')}>{State.Language == 'pl' ? "Kontakt" : 'Contact'}</Button>
                        <Button onClick={ChangeLanguage}><img src={State.Language == 'pl' ? UKFlag : PolishFlag} /></Button>
                    </>
                        :
                        <Button onClick={onMenuOpen}><img src={Menu} /></Button>
                    }
                    {OpenMenu &&
                        <MobileMenu
                            language={State.Language}
                            changeLanguage={ChangeLanguage}
                            navigateToSection={NavigateToSection}
                            closeMenu={onMenuClose}
                        />
                    }
                </Box>
            </OuterBox>
        </TopBar>
    )
}

export default TopMenu