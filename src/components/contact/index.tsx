import React from 'react'
import { Container, Typography, Box, styled } from '@mui/material'
import Form from './form'
import Social from './social'
import Navigation from './navigation'

const FlexContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    ' & > *': {
        flex: '1 1 0',
    }
})

const Contact = () => {
    return (
        <Container sx={{ minWidth: '100vw', backgroundColor: '#ddd', marginTop: 20, padding: '40px 0' }} disableGutters id='contact'>
            <FlexContainer>
                <Box component='div' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Navigation />
                    <Form />
                </Box>
                <Box component='div' sx={{display: 'flex', justifyContent: 'center'}} >
                    <Typography variant='h4'>Paweł Musioł</Typography>
                </Box>
                <Social />
            </FlexContainer>
        </Container>
    )
}

export default Contact