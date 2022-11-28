import React from 'react'
import { Box, IconButton, styled } from '@mui/material'
import { GitHub, LinkedIn, Mail } from '../../images'

const Image = styled('img')(({ height }) => ({
    height: height,
    width: height,
}))

const Social = () => {
    return (
        <Box component='div' sx={{ display: 'flex', columnGap: 2, justifyContent: 'flex-end' }}>
            <IconButton href='mailto:pmusiol1999@gmail.com' sx={{ background: '#000', '&:hover': { background: '#000' } }}>
                <Image src={Mail} sx={{ filter: 'invert(100%)' }} height='32px' />
            </IconButton>
            <IconButton sx={{ padding: 0 }} >
                <Image src={GitHub} height='48px' />
            </IconButton>
            <IconButton sx={{ padding: 0 }}>
                <Image src={LinkedIn} height='48px' />
            </IconButton>
        </Box>
    )
}

export default Social