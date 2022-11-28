import React from 'react'
import { Grid, Typography, Container, styled } from '@mui/material'
import Skills from './skills'
import { Me } from '../../images'

const Desc = styled(Grid)({
    color: '#eee',
    padding: '10px 0',
    '& > p': {
        fontSize: '1.5rem',
        marginTop: '10px',
    }
})

const About = () => {
    return (
        <Container sx={{minHeight: '100vh', display: 'flex', justifyContent:'center', flexDirection:'column'}} id='about'>
            <Typography variant='h2'>
                Cześć, jestem Paweł,
            </Typography>
            <Grid container direction='row'>
                <Grid item xs={8}>
                    <Desc item xs={11}>
                        <Typography>
                            fullstack developer z Polski. Tworzę projekty oparte o ReactJS i NodeJS.
                        </Typography>
                        <Typography>
                            Większośc moich projektów to mniejsze serwisy które tworzyłem głównie z myślą o usprawnieniu swojego życia.
                            Stworzyłem również parę komercyjnych stron dla firm i osób prywatnych.
                        </Typography>
                        <Typography>
                            Staram się rozwijać i eksperymentować z różnymi bibliotekami np. ThreeJS, Mui
                        </Typography>
                    </Desc>
                    <Grid item>
                        <Skills />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <img src={Me} style={{ width: '90%', borderRadius: 12, border: '2px solid #000' }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default About