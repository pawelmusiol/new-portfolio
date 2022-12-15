import React from 'react'
import { Typography, Box, styled } from '@mui/material'

const MainBox = styled(Box)(({theme}) =>({
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100vw - 50vh)',
    height: '90vh',
    alignContent: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',
    [theme.breakpoints.down('md')] : {
        width: '80vw',
        textAlign: 'right',
        margin: 'auto',
        '& > h1': {
            fontSize: '3.2rem'
        },
        '& > h3': {
            fontSize: '2rem'
        }
    }

}))

const MainContent = () => {
    return (
        <MainBox>
            <Typography variant='h1' marginBottom={10} sx={{color: '#FFDB58'}}>
                Paweł Musioł
            </Typography>
            <Typography variant='h3'>
                Web Developer with passion to work
            </Typography>
        </MainBox>
    )
}

export default MainContent