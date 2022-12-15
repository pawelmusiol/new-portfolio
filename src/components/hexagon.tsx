import React from 'react';
import { styled, Paper } from '@mui/material';

const HexPaper = styled(Paper)(({ marginLeft = 0, marginRight = 0 }: { marginLeft?: number, marginRight?: number }) => ({
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 44,
    marginLeft: marginLeft + 10,
    marginRight: marginRight + 10,
    width: 104,
    height: 60,
    borderRadius: 0,
    borderColor: '#eee',
    zIndex: 9999,
    '&:before': {
        content: "' '",
        width: 0,
        height: 0,
        borderBottom: '30px solid',
        borderColor: 'inherit',
        borderLeft: '52px solid transparent',
        borderRight: '52px solid transparent',
        position: 'absolute',
        top: -30,
    },
    '&:after': {
        content: "' '",
        width: 0,
        height: 0,
        borderTop: '30px solid',
        borderColor: 'inherit',
        borderLeft: '52px solid transparent',
        borderRight: '52px solid transparent',
        position: 'absolute',
        bottom: -30,
    }
}))


interface IProps {
    children: JSX.Element[] | JSX.Element | string | null,
    marginLeft?: number,
    marginRight?: number,
    onClick?: () => void
}

export default function Hexagon({ children, onClick, marginLeft = 0, marginRight = 0 }: IProps) {
    return (
        <>
            <HexPaper marginLeft={marginLeft} onClick={onClick} marginRight={marginRight}>
                {children}
            </HexPaper>
            <HexPaper marginLeft={marginLeft} sx={{ position: 'absolute', top: 0, transform: 'scale(1.23)', zIndex: -1, backgroundColor: '#C0C0C0', border: '#C0C0C0' }} />
        </>
    )
}