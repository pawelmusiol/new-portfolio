import React from 'react';
import { Grid, styled, Typography } from '@mui/material'
import { indigo, brown, orange, cyan, red, common } from '@mui/material/colors'
import { Tab } from '..'
import { GitHub, LinkedIn } from '../../images'


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

const Tabs = () => {

    return (
        <RightGrid container position='absolute' top={0} right={0}>
            <Tab bgColor={indigo} section={'about'}>
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
            </Tab>
        </RightGrid>
    )
}

export default Tabs