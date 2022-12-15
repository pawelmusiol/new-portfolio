import React, { useContext } from 'react'
import { Grid, Typography, Container, styled } from '@mui/material'
import Skills from './skills'
import { Me } from '../../images'
import { LanguageContext } from '../../providers/context'



const plContent = {
    title: 'Cześć, jestem Paweł,',
    desc: [
        'fullstack developer z Polski. Tworzę projekty oparte o ReactJS i NodeJS.',
        'Większośc moich projektów to mniejsze serwisy które tworzyłem głównie z myślą o usprawnieniu swojego życia. Stworzyłem również parę komercyjnych stron dla firm i osób prywatnych.',
        'Staram się rozwijać i eksperymentować z różnymi bibliotekami np. ThreeJS, Mui.',
        'Oprócz Kodowania interesuję się sportem i muzyką, zbieram winyle.'
    ]
}

const enContent = {
    title: 'hi, I am Paweł',
    desc: [
        'fullstack developer from poland. I Create projects based on ReactJS and NodeJs.',
        'Most of my projects are small services I created to make life easier. I also created a few commerial websites for companies and people.',
        'I\'m trying to develop myself and experiment with various libraries like ThreeJS or Mui.',
        'Apart from coding I\' interested in sport and music, I collect vinyls.'
    ]
}

const Desc = styled(Grid)(({ theme }) => ({
    color: '#eee',
    padding: '10px 0',
    '& > p': {
        fontSize: '1.5rem',
        marginTop: '10px',
    },
    [theme.breakpoints.down('md')]: {
        '& > p' : {
            fontSize: '1.2rem',
        },
        '& :not(p:nth-child(1))': {
            minWidth: '90vw',
        }
    }
}))



const About = () => {

    const { State } = useContext(LanguageContext)

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} id='about'>
            <Typography variant='h2' sx={{ color: '#FFDB58' }}>
                {State.Language == 'pl' ? plContent.title : enContent.title}
            </Typography>
            <Grid container direction='row'>
                <Grid item xs={8} direction='column'>
                    <Desc item xs={8}>
                        {State.Language == 'pl'
                            ? plContent.desc.map((section, index) => <Typography key={`desc-${index}`}>{section}</Typography>)
                            : enContent.desc.map((section, index) => <Typography key={`desc-${index}`}>{section}</Typography>)
                        }
                    </Desc>
                </Grid>
                <Grid item xs={4}>
                    <img src={Me} style={{ width: '90%', borderRadius: 12, border: '2px solid #000' }} />
                </Grid>
            </Grid>
            <Grid item>
                <Skills title={State.Language == 'pl' ? 'Moje umiejętności' : ' My Skills'} />
            </Grid>
        </Container>
    )
}

export default About