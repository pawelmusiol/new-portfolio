import React from 'react';
import { Button, Box } from '@mui/material';

interface IProps {
    language: string
}

const Navigation = ({ language }: IProps) => {
    return (
        <Box component='div'>
            <Button>{language == 'pl' ?"O mnie": 'About'}</Button>
            <Button>{language == 'pl' ?"Projekty": 'Projects'}</Button>
        </Box>
    )
}

export default Navigation