import React from 'react';
import { createTheme, ThemeProvider, CssBaseline} from '@mui/material'

let theme = createTheme()
theme = createTheme(theme, {
    typography: {
        fontFamily: 'Dosis, sans-serif'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    fontFamily: 'Dosis, sans-serif',
                    overflowX: 'hidden',
                    background: 'none',
                    color: '#C0C0C0',
                    [theme.breakpoints.down('md')]:{
                        width: '100vw',
                        maxWidth: '100vw',
                    }
                }
            }
        }
    }
})
type Props = {
    children: JSX.Element | JSX.Element[]
}

const Provider = ({children}: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default Provider