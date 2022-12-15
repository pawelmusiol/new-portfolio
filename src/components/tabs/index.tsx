import React, { useContext } from 'react';
import { Grid, styled, Typography, Link } from '@mui/material'
import { indigo, brown, orange, cyan, red, common } from '@mui/material/colors'
import { Tab, Hexagon } from '..'
import { GitHub, LinkedIn, PolishFlag, UKFlag } from '../../images'
import { LanguageContext } from '../../providers/context';


const RightGrid = styled(Grid)({
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '50vh',
    alignItems: 'flex-end',
    '& img': {
        height: '64px',
    }
})

const TabText = styled(Typography)({
    fontSize: '2rem',
    fontWeight: '600',
})

interface IProps {
    children: string | JSX.Element,
    marginRight?: number,
    href?: string,
    section?: string,
    onClick?: () => void
}

const SingleHex = ({ children, href, section, onClick, marginRight = 0 }: IProps) => {


    const NavigateToSection = () => {
        if (section) {
            //window.scrollTo({top: window.innerHeight * position, behavior: 'smooth'})
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }
        if (href) {
            window.open(href, '_blank')?.focus()
        }
    }

    return (
        <Grid item sx={{ position: 'relative', cursor: 'pointer' }}>
            <Hexagon marginRight={marginRight} onClick={onClick ? onClick : NavigateToSection}>
                {children}
            </Hexagon>
        </Grid>
    )
}

const Tabs = () => {

    const {State, setLanguage} = useContext(LanguageContext)

    const ChangeLanguage = () => {
        if(State.Language == 'pl') setLanguage('en')
        else setLanguage('pl')
    }

    return (
        <Grid container sx={{ display: 'flex', position: 'absolute', top: 60, right: 10, flexDirection: 'row-reverse' }}>
            <SingleHex section='contact'>
                <TabText>{State.Language == 'pl' ? 'Kontakt' : 'Contact'}</TabText>
            </SingleHex>
            <SingleHex section='projects'>
                <TabText>{State.Language == 'pl' ? 'Projekty' : 'Projects'}</TabText>
            </SingleHex>
            <SingleHex section='about'>
                <TabText>{State.Language == 'pl' ? 'O Mnie' : 'About'}</TabText>
            </SingleHex>
            <Grid item sx={{ width: '100%' }}></Grid>
            <SingleHex href='https://github.com/pawelmusiol' marginRight={62}>
                <img src={GitHub} style={{ width: '60%', zIndex: 2 }} />
            </SingleHex>
            <SingleHex href='https://www.linkedin.com/in/pawe%C5%82-musio%C5%82-9875081a3/'>
                <img src={LinkedIn} style={{ width: '60%', zIndex: 2 }} />
            </SingleHex>
            <Grid item sx={{ width: '100%' }}></Grid>
            <SingleHex onClick={ChangeLanguage}>
                <img src={State.Language == 'en' ? PolishFlag : UKFlag} style={{ width: '60%', zIndex: 2 }} />
            </SingleHex>
            {/* <Tab bgColor={indigo} section={'about'}>
                <TabText color='whitesmoke'>O Mnie</TabText>
            </Tab>
            <Tab bgColor={brown} section={'projects'}>
                <TabText>Projekty</TabText>
            </Tab>
            <Tab bgColor={orange} section={'contact'}>
                <TabText>Kontakt</TabText>
            </Tab>
            <Tab aspect='2/1' noAnimation bgColor={common} >
                <Tab height='100%' bgColor={cyan} href='https://github.com'>
                    <img src={GitHub} />
                </Tab>
                <Tab height='100%' bgColor={red} href='https://github.com'>
                    <img src={LinkedIn} />
                </Tab>
            </Tab> */}
        </Grid>
    )
}

export default Tabs