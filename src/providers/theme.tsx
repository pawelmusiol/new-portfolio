import React from 'react';
import { createTheme, ThemeProvider, CssBaseline} from '@mui/material'
import { NONAME } from 'dns';

const theme = createTheme({
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