import React, { useContext } from 'react';
import { Grid, styled, Box, Typography, Link, SxProps, Theme } from '@mui/material'
import { indigo, brown, orange, cyan, red, common } from '@mui/material/colors'
import { Tab, Hexagon } from '..'
import { GitHub, LinkedIn, PolishFlag, UKFlag } from '../../images'
import { LanguageContext } from '../../providers/context';
import { NavigateToSection } from '../TopMenu';

interface IProps {
    children: string | JSX.Element,
    href?: string,
    section?: string,
    onClick?: () => void,
    xs: number,
    sx?: SxProps<Theme>,
}

const SingleLink = ({ section, children, href, onClick, xs = 12, sx }: IProps) => {
    return (
        <Grid item xs={xs}>
            <BoxWithBG sx={sx}>
                <Link sx={{textDecoration: 'none'}} onClick={onClick} href={href} target='_blank'>
                    {children}
                </Link>
            </BoxWithBG>
        </Grid>
    )
}

const BoxWithBG = styled(Box)(() => ({
    background: ' linear-gradient(54.48deg, rgba(54, 169, 225, 0.5) 0%, rgba(66, 158, 218, 0.5) 4.63%, rgba(124, 102, 186, 0.5) 29.26%, rgba(170, 58, 160, 0.5) 51.98%, rgba(203, 26, 141, 0.5) 72.07%, rgba(223, 7, 130, 0.5) 88.76%, rgba(230, 0, 126, 0.5) 100%)',
    padding: '8px',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    '& *': {
        textDecoration: 'none',
    },
    '& a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& img': {
        //maxWidth: '48px',
        maxHeight: '48px',
        minHeight: '48px',
    }
}))

const Tabs = () => {

    const { State, setLanguage } = useContext(LanguageContext)

    const ChangeLanguage = () => {
        if (State.Language == 'pl') setLanguage('en')
        else setLanguage('pl')
    }

    return (
        <Grid container columns={16} spacing={2} sx={{ display: 'flex', position: 'absolute', top: 60, right: 10, justifyContent: 'flex-end', flexDirection: 'row', width: ' 30vw' }}>
            <SingleLink sx={{justifyContent: 'flex-end'}} xs={7} onClick={() => NavigateToSection('about')}>
                {State.Language == 'pl' ? "O Mnie" : 'About'}
            </SingleLink>
            <SingleLink sx={{justifyContent: 'flex-end'}} xs={9} onClick={() => NavigateToSection('about')}>
                {State.Language == 'pl' ? "Projekty" : 'Projects'}
            </SingleLink>
            <SingleLink sx={{justifyContent: 'flex-end'}} xs={6} onClick={() => NavigateToSection('about')}>
                {State.Language == 'pl' ? "Kontakt" : 'Contact'}
            </SingleLink>
            <SingleLink sx={{justifyContent: 'center'}} xs={4} onClick={ChangeLanguage}>
                <img src={State.Language == 'pl' ? UKFlag : PolishFlag} />
            </SingleLink>
            <SingleLink sx={{justifyContent: 'center'}} xs={3} href="https://github.com/pawelmusiol">
                <img src={GitHub} />
            </SingleLink>
            <SingleLink sx={{justifyContent: 'center'}} xs={3} href="https://www.linkedin.com/in/pawe%C5%82-musio%C5%82-9875081a3/">
                <img src={LinkedIn} />
            </SingleLink>
        </Grid>
    )
}

export default Tabs