import React from 'react';
import { Grid, Typography, styled, Paper, Box } from '@mui/material';
import { Expo, Gatsby, JS, Mongodb, Next, Nodejs, ReactImg, TS } from '../../images/stack'
import { Hexagon } from '../'

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



const SkillsGrid = styled(Grid)(({ theme }) => ({
    //backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //backdropFilter: 'blur(10px)',
    marginLeft: '0vw',
    borderRadius: 12,
    padding: 10,
    [theme.breakpoints.down('md')]: {
        marginLeft: '0',
        width: '110vw',
        transform: 'scale(.7)',
    }
}))

const SingleSkill = ({ name, src, margin }: { name: string, src: string, margin: number }) => {
    return (
        <Grid item sx={{ position: 'relative' }}>
            <Hexagon marginLeft={margin} >
                <img style={{ height: '48px', zIndex: 10 }} src={src} />
                <Typography sx={{ zIndex: 10 }}>{name}</Typography>
            </Hexagon>
        </Grid>
    )
}

interface IProps {
    title: string
}

const Skills = ({ title }: IProps) => {
    return (
        <Box component='div'>
            <Typography variant='h4' sx={{ margin: '12px 0' }}>{title}</Typography>
            <SkillsGrid container direction='row' sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 6 }}>
                {Stack.map((skill, i) => {
                    return (
                        <>
                            {i % 3 == 0 && <Box component='div' width="100%" />}
                            <SingleSkill name={skill.name} src={skill.img} margin={i % 3 == 0 ? Math.floor(3 - (i / 3) * 56) : 0} />

                        </>
                    )
                })}
            </SkillsGrid>
        </Box>
    )
}

export default Skills