import React, { useState } from 'react';
import { Box, FormControl, TextField, Typography, Dialog, styled, Button } from '@mui/material'

const SBox = styled(Box)({
    backgroundColor: '#eee',
    padding: 20,
    //marginTop: -100,

})

const DialogHeader = styled(Box)({
    backgroundColor: 'rgb(130,25,212)',
    background: 'linear-gradient(135deg, rgba(75,36,255,1) 0%, rgba(130,25,212,1) 100%)',
    padding: 20,
    '& > p': {
        color: '#fff',
        fontSize: '1.6rem',
    }
})

interface IProps{
    language: string,
}

const Form = ({language}: IProps) => {

    const [DialogState, setDialogState] = useState(false)

    const handleClose = () => {
        setDialogState(false)
    }
    const handleOpen = () => {
        setDialogState(true)
    }

    return (
        <Box component='div'>
            <Button onClick={handleOpen} sx={{ background: '#222', '&:hover': { background: '#222', boxShadow: '5px -5px #666' } }}>{language == 'pl' ?"Skontaktuj się": 'Send a message'}</Button>
            <Dialog onClose={handleClose} open={DialogState}>
                <DialogHeader>
                    <Typography>{language == 'pl' ?"Skontaktuj się": 'Send a message'}</Typography>
                </DialogHeader>
                <SBox component='div'>
                    <FormControl sx={{ minWidth: '40vh' }}>
                        {/* <Box component='div' sx={{ display: 'flex', columnGap: 5 }}> */}
                        <TextField label={language == 'pl' ?"Imie i Nazwisko": 'Name and Surname'} variant="standard" fullWidth />
                        <TextField label="Mail" variant="standard" fullWidth />
                        {/* </Box> */}
                        <TextField label={language == 'pl' ?"Wiadomość": 'Message'} variant="standard" fullWidth multiline rows={4} />
                        <Button sx={{ marginTop: 1, background: '#222', alignSelf: 'flex-end', maxWidth: 'fit-content' , '&:hover': { background: '#222', boxShadow: '5px -5px #666' } }}>{language == 'pl' ?"Wyślij": 'Send'}</Button>
                    </FormControl>
                </SBox>
            </Dialog>
        </Box>
    )
}

export default Form