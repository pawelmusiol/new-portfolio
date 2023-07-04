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
    borderRadius: 12,
    padding: 10,
    [theme.breakpoints.down('md')]: {
        marginLeft: '0',
        width: '90vw',
        //transform: 'scale(.7)',
        alignItems: 'flex-start',
    }
}))

const SingleSkillGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}))

const BoxWithBG = styled(Box)(() => ({
    background: ' linear-gradient(54.48deg, rgba(54, 169, 225, 0.5) 0%, rgba(66, 158, 218, 0.5) 4.63%, rgba(124, 102, 186, 0.5) 29.26%, rgba(170, 58, 160, 0.5) 51.98%, rgba(203, 26, 141, 0.5) 72.07%, rgba(223, 7, 130, 0.5) 88.76%, rgba(230, 0, 126, 0.5) 100%)'

}))

const SingleSkill = ({ name, src }: { name: string, src: string, }) => {
    return (
        <SingleSkillGrid item xs={3} md={2}>
            <BoxWithBG sx={{ display: 'flex', maxWidth: '80px', minWidth: '80px', aspectRatio: '1/1', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '12px' }} >
                <img style={{ zIndex: 10, maxWidth: '48px', minWidth: '48px' }} src={src} />
            </BoxWithBG>
            <Typography sx={{ zIndex: 10 }}>{name}</Typography>
        </SingleSkillGrid>
    )
}

interface IProps {
    title: string
}

const Skills = ({ title }: IProps) => {
    return (
        <Box component='div' sx={{ marginTop: 10 }}>
            <Typography variant='h3' sx={{ margin: '12px 0', textAlign: 'center' }}>{title}</Typography>
            <SkillsGrid spacing={2} container direction='row' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: 6 }}>
                {Stack.map((skill, i) => {
                    return (
                        <>
                            {/*i % 3 == 0 && <Box component='div' width="100%" />*/}
                            <SingleSkill name={skill.name} src={skill.img} />

                        </>
                    )
                })}
            </SkillsGrid>
        </Box>
    )
}

export default Skills