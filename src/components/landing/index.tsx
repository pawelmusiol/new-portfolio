import React from 'react';
import { Container, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import { Tabs } from '../'
import MainContent from './mainContent';

const MainContainer = styled(Container)(() => ({
    minWidth: '100vw',
    minHeight: '100vh',
}))

const Landing = () => {
    const theme = useTheme()
    const showTabs = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <MainContainer disableGutters id='landing'>
            <MainContent />
            {showTabs &&
                <Tabs />
            }
        </MainContainer>
    )
}

export default Landing