import React from 'react';
import { Grid, Typography, styled, Paper, Box } from '@mui/material';
import { Expo, Gatsby, JS, Mongodb, Next, Nodejs, ReactImg, TS } from '../../images/stack'

const Stack = [
    {
        name: 'Java script',
        img: JS
    },
    {
        name: 'Type script',
        img: TS
    },
    {
        name: 'React',
        img: ReactImg
    },
    {
        name: 'React Native',
        img: ReactImg
    },
    {
        name: 'NextJS',
        img: Next
    },
    {
        name: 'Gatsby',
        img: Gatsby
    },
    {
        name: 'Expo',
        img: Expo
    },
    {
        name: 'Nodejs',
        img: Nodejs
    },
    {
        name: 'Mongodb',
        img: Mongodb
    },

]


const SkillPaper = styled(Paper)({
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: 80,
    height: 80,

})

const SkillsGrid = styled(Grid)({
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: 12,
    padding: 10,
})

const SingleSkill = ({ name, src }: { name: string, src: string }) => {
    return (
        <Grid item xs={2}>
            <SkillPaper>
                <img style={{ height: '48px' }} src={src} />
                <Typography>{name}</Typography>
            </SkillPaper>
        </Grid>
    )
}

const Skills = () => {
    return (
        <Box component='div' >
            <Typography variant='h4' sx={{ margin: '12px 0' }}>My Skills</Typography>
            <SkillsGrid container direction='row' gap={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                {Stack.map(skill => <SingleSkill name={skill.name} src={skill.img} />)}
            </SkillsGrid>
        </Box>
    )
}

export default Skills