import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material'
import { PolishFlag, UKFlag, Close } from '../../images'

const Menu = styled(Box)(({ theme }) => ({
    width: '100vw',
    maxWidth: '100vw',
    height: '100vh',
    zIndex: 10001,
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#222222',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        '& button': {
            justifyContent: 'flex-end',
        }
    }
}))

const Name = styled(Typography)({
    position: 'fixed',
    bottom: 10,
    left: '50%',
    color: '#FFDB58',
    fontSize: '1.6rem',
    transform: 'translateX(-50%)'
})

interface IProps {
    language: string,
    changeLanguage: () => void,
    navigateToSection: (section: string) => void,
    closeMenu: () => void
}

const MobileMenu = ({ language, changeLanguage, navigateToSection, closeMenu }: IProps) => {

    const NavigateAndClose = (section: string) => {
        navigateToSection(section)
        closeMenu()
    }

    return (
        <Menu component='div'>
            <Button onClick={closeMenu}><img src={Close} /></Button>
            <Name>Paweł Musioł</Name>
            <Button onClick={() => NavigateAndClose('start')}>{language == 'pl' ? "Start" : 'Start'}</Button>
            <Button onClick={() => NavigateAndClose('about')}>{language == 'pl' ? "O Mnie" : 'About'}</Button>
            <Button onClick={() => NavigateAndClose('projects')}>{language == 'pl' ? "Projekty" : 'Projects'}</Button>
            <Button onClick={() => NavigateAndClose('contact')}>{language == 'pl' ? "Kontakt" : 'Contact'}</Button>
            <Button onClick={changeLanguage} ><img style={{ maxWidth: '20vw' }} src={language == 'pl' ? UKFlag : PolishFlag} /></Button>
        </Menu>
    )
}

export default MobileMenu