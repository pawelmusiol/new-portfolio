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
    top: 16,
    left: '2%',
    color: '#FFDB58',
    fontSize: '1.6rem',
    //transform: 'translateX(-50%)',
    zIndex: 10001,
})

interface IProps {
    language: string,
    changeLanguage: () => void,
    navigateToSection: (section: string, marginTop?: number) => void,
    closeMenu: () => void
}

const MobileMenu = ({ language, changeLanguage, navigateToSection, closeMenu }: IProps) => {

    const NavigateAndClose = (section: string) => {
        navigateToSection(section, 80)
        closeMenu()
    }

    return (
        <Menu component='div'>
            <Button onClick={closeMenu}><img src={Close} alt="close" /></Button>
            <Button onClick={() => NavigateAndClose('landing')}><Name>Paweł Musioł</Name></Button>
            {/* <Button onClick={() => NavigateAndClose('landing')}>{language == 'pl' ? "Start" : 'Start'}</Button> */}
            <Button onClick={() => NavigateAndClose('about')}>{language == 'pl' ? "O Mnie" : 'About'}</Button>
            <Button onClick={() => NavigateAndClose('projects')}>{language == 'pl' ? "Projekty" : 'Projects'}</Button>
            <Button onClick={() => NavigateAndClose('contact')}>{language == 'pl' ? "Kontakt" : 'Contact'}</Button>
            <Button onClick={changeLanguage} ><img style={{ maxWidth: '20vw' }} src={language == 'pl' ? UKFlag : PolishFlag} alt="change language" /></Button>
        </Menu>
    )
}

export default MobileMenu