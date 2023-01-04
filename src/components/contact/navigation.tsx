import React from 'react';
import { Button, Box } from '@mui/material';
import { NavigateToSection } from '../TopMenu'

interface IProps {
    language: string
}

const Navigation = ({ language }: IProps) => {
    return (
        <Box component='div'>
            <Button onClick={() => NavigateToSection('about')}>{language === 'pl' ?"O mnie": 'About'}</Button>
            <Button onClick={() => NavigateToSection('projects')}>{language === 'pl' ?"Projekty": 'Projects'}</Button>
        </Box>
    )
}

export default Navigation