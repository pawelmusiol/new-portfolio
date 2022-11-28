import React from 'react';
import { Container, Typography, styled } from '@mui/material'
import { Tabs } from '../'
import MainContent from './mainContent';

const MainContainer = styled(Container)(() => ({
    minWidth: '100vw', 
    minHeight: '100vh',
}))

const Landing = () => {
    return (
        <MainContainer disableGutters id='landing'>
            <MainContent />
            <Tabs/>
        </MainContainer>
    )
}

export default Landing