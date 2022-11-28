import React from 'react';
import { Container, Grid } from '@mui/material'
import SingleProject from './singleProject';
import { Cinema } from '../../images'

const projectsData = [
    {
        name: 'Archon Group',
        img: Cinema,
        live: '',
        github: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Java script', 'React', 'gatsby'],
    },
    {
        name: 'Pio-Trans',
        img: Cinema,
        live: '',
        github: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Java script', 'React', 'nextJS'],
    },
    {
        name: 'Random Movie Picker',
        img: Cinema,
        live: '',
        github: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Java script', 'React', 'NextJS'],
    },
    {
        name: 'Elite Tourism Route',
        img: Cinema,
        live: '',
        github: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Java script', 'React', 'NextJS'],
    },
    {
        name: 'Last.fm graph',
        img: Cinema,
        live: '',
        github: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Java script', 'React', 'NextJS'],
    },
    {
        name: 'Spotify Music Tracker',
        img: Cinema,
        live: '',
        github: '',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Java script', 'React Native', 'NodeJS', 'MongoDB'],
    },

]


const Projects = () => {
    return (
        <Container sx={{ marginTop: 5 }} id='projects'>
            <Grid container direction='row' justifyContent='space-evenly' gap={2}>
                {projectsData.map(project => <SingleProject project={project} />)}
            </Grid>
        </Container>
    )
}

export default Projects