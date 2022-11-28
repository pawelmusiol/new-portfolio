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

const Form = () => {

    const [DialogState, setDialogState] = useState(false)

    const handleClose = () => {
        setDialogState(false)
    }
    const handleOpen = () => {
        setDialogState(true)
    }

    return (
        <Box component='div'>
            <Button onClick={handleOpen} sx={{ background: '#222', '&:hover': { background: '#222', boxShadow: '5px -5px #666' } }}>Skontaktuj się ze mną</Button>
            <Dialog onClose={handleClose} open={DialogState}>
                <DialogHeader>
                    <Typography>Skontaktuj się</Typography>
                </DialogHeader>
                <SBox component='div'>
                    <FormControl sx={{ minWidth: '40vh' }}>
                        {/* <Box component='div' sx={{ display: 'flex', columnGap: 5 }}> */}
                        <TextField label="Imie i Nazwisko" variant="standard" fullWidth />
                        <TextField label="Mail" variant="standard" fullWidth />
                        {/* </Box> */}
                        <TextField label="Wiadomość" variant="standard" fullWidth multiline rows={4} />
                        <Button sx={{ marginTop: 1, background: '#222', alignSelf: 'flex-end', maxWidth: 'fit-content' , '&:hover': { background: '#222', boxShadow: '5px -5px #666' } }}>Wyślij</Button>
                    </FormControl>
                </SBox>
            </Dialog>
        </Box>
    )
}

export default Form