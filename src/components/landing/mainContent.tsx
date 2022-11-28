import React from 'react'
import { Typography, Box, styled } from '@mui/material'

const MainBox = styled(Box)({
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100vw - 50vh)',
    height: '90vh',
    alignContent: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',

})

const MainContent = () => {
    return (
        <MainBox>
            <Typography variant='h1' marginBottom={10}>
                Paweł Musioł
            </Typography>
            <Typography variant='h3'>
                Web Developer with passion to work
            </Typography>
        </MainBox>
    )
}

export default MainContent