import React, { useContext } from 'react'
import { Container, Typography, Box, styled } from '@mui/material'
import Form from './form'
import Social from './social'
import Navigation from './navigation'
import { LanguageContext } from '../../providers/context'

const FlexContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    ' & > *': {
        flex: '1 1 0',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
    }
}))

const Contact = () => {

    const { State } = useContext(LanguageContext)

    return (
        <Container sx={{ minWidth: '100vw', backgroundColor: '#C0C0C0', marginTop: 20, padding: '40px 0' }} disableGutters id='contact'>
            <FlexContainer>
                <Box component='div' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Navigation language={State.Language} />
                    <Form language={State.Language} />
                </Box>
                <Box component='div' sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Typography variant='h4' sx={{ color: '#222222' }}>Paweł Musioł</Typography>
                </Box>
                <Social />
            </FlexContainer>
        </Container>
    )
}

export default Contact