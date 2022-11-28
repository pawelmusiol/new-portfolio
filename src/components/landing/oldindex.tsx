import React, { useState, useEffect } from 'react';
import { Container, styled } from '@mui/material'
import { motion } from "framer-motion"

const MotionDiv = styled(motion.div)(() => ({
    width: 4,
    height: 4,
    backgroundColor: '#444',
    position: 'absolute',
    borderRadius: '50%',
}))

const Landing = () => {

    const [WindowSize, setWindowSize] = useState({ height: window.innerHeight, width: innerWidth })
    const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }
        const handleMouseMove = (e: MouseEvent): any => {
            e.preventDefault()
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
        }
    }, [])




    const useSetDots = () => {

        const offset = 50

        const compare = (x: number) => {
            return x > -offset && x < 0
        }

        const getPostionToAnimate = (i: number, j: number) => {
            let distX = MousePosition.x - i * offset
            let distY = MousePosition.y - j * offset
            if ( Math.abs(distX) < offset * 2 && Math.abs(distY) < offset * 2) {
                console.log(distX, distY)
                return {
                    left: [i * offset, i * offset + ((distX > 0) ? -20 : 20) ],
                    top: [j * offset, j * offset + ((distY > 0) ? -20 : 20)]
                }
            }
            else {
                return {
                    left: [i * offset, i * offset + Math.random() *20 - 10, i * offset + Math.random() *20 - 10, i * offset + Math.random() *20 - 10, i * offset,],
                    top: [j * offset, j * offset + Math.random() *20 - 10, j * offset + Math.random() *20 - 10, j * offset + Math.random() *20 - 10, j * offset,]
                }
            }
        }

        const generateRandomAnimation = (i: number, j: number) => {
            let ret = {
                left: [i * offset],
                top: [j * offset]
            }

            for (let it = 0; it < 20; it++) {
                ret.left.push(i * offset + Math.random() *100 - 50)
                ret.top.push(j * offset + Math.random() *100 - 50)
            }

            ret.left.push(i * offset)
            ret.top.push(j * offset)

            return ret
        }

        let dots = []
        for (let i = 0; i < WindowSize.width / offset; i++) {
            for (let j = 0; j < WindowSize.height / offset; j++) {
                dots.push(
                    <MotionDiv
                        key={`anim ${i * offset}-${j * offset}`}
                        style={{ left: i * offset + 10, top: j * offset + 10 }}
                        animate={generateRandomAnimation(i, j)}
                        transition={{

                            duration: 15,
                            repeat: Infinity
                        }}
                    />)
            }
        }
        return dots
    }

    const dots = useSetDots()

    return (
        
        <Container sx={{ backgroundColor: '#111', height: '100vh', minWidth: '100vw' }}>
            {dots}
        </Container>
    )
}

export default Landing