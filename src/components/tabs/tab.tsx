import React, { useRef } from 'react';
import { Grid, GridProps, styled, PaletteColor, keyframes } from '@mui/material'
import { NavigateToSection } from '../TopMenu'


interface IProps extends GridProps {
    section?: string
    aspect?: string;
    height?: string;
    bgColor?: any;
    noAnimation?: boolean;
    href?: string;
}

interface IStyledProps {
    bgColor?: string
    aspect?: string,
    height?: string,
    noAnimation?: boolean
}

const CustomGrid = styled(Grid)<IStyledProps>(({ bgColor, aspect, height, noAnimation, }) => ({
    cursor: 'pointer',
    backgroundColor: bgColor ? bgColor[900] : '#03071e',
    height: height ? height : '25%',
    zIndex: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: aspect ? aspect : '1/1',
    position: 'relative',
    overflow: noAnimation ? 'visible' : 'hidden',
    transition: '.2s',
    '&:hover': !noAnimation ? {
        transform: 'scale(1.2)',
        zIndex: 20,
        transition: '.6s',
        
        //borderRadius: '25%',
        '& p,img':{
            transition: '.5s',
            //transform: 'rotate(210deg)'
        }
    }
    : {},
    '& p,img': {
        position: 'absolute',
        zIndex: 2,
    }
}))

const AnimationGrid = styled(Grid)<IStyledProps>(({ bgColor, aspect, height }) => ({
    transition: '.15s ease-out',
    position: 'absolute',
    top: '100%',
    backgroundImage: bgColor ? bgColor : '#03071e',
    height: height ? height : '100%',
    aspectRatio: aspect ? aspect : '4/1',
}))

const Tab = ({ children, sx, aspect, height, bgColor, noAnimation, section, href }: IProps) => {

    console.log(bgColor)
    let layers = [
        {
            color: bgColor[500],
            top: '100%'
        },
        {
            color: bgColor[600],
            top: '125%'
        },
        {
            color: bgColor[700],
            top: '150%'
        },
        {
            color: bgColor[800],
            top: '175%'
        },
        {
            color: bgColor[900],
            top: '200%'
        },
    ]

    const ref = useRef<HTMLDivElement>(null)

    const onMouseEnter = () => {
        if (ref.current) {
            ref.current.style.top = '0%'
        }
    }
    const onMouseLeave = () => {
        if (ref.current) {
            ref.current.style.top = '100%'
        }
    }



    return (

        <CustomGrid 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        item sx={sx} 
        bgColor={bgColor} 
        aspect={aspect} 
        noAnimation={noAnimation} 
        height={height} 
        onClick={section ? () => NavigateToSection(section) : () => window.open(href, '_blank')}>
            {children}
            {!noAnimation &&
                <AnimationGrid ref={ref} top='100%' /* bgColor={`linear-gradient(to top, ${layers.map(layer => layer.color)})`} */ />
            }
        </CustomGrid>

    )
}

export default Tab