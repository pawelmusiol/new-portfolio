import React, { useRef, useState, useEffect, useContext } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"
import { Mesh, MathUtils, Clock, Vector3, BufferGeometryUtils, ShaderMaterial, Color } from 'three'
import { createNoise3D } from 'simplex-noise'
import TorusShaderMaterial from './TorusShaderMaterial'
import { styled } from '@mui/material'
import { useMobile } from '../../hooks'
import { LanguageContext } from '../../providers/context'

interface IProps {
    children?: JSX.Element[] | JSX.Element
}




const Ball = ({ }) => {


    const points = useRef<Mesh>(null!)

    const count = 300


    let clock = new Clock()

    //let noise = setNoise()

    const particlesPosition = () => {
        for (let i = 0; i < points.current.geometry.attributes.position.count; i++) {
            v3.fromBufferAttribute(points.current.geometry.attributes.position, i)
            points.current.geometry.attributes.position.setXYZ(i, v3.clone().x, v3.clone().y, v3.clone().z)
        }
    }

    useEffect(() => {
        particlesPosition()
    }, [])

    const v3 = new Vector3()

    let deltaSum = 0

    let setNoise = createNoise3D()


    useFrame((state, delta) => {

        let t = performance.now();


        for (let i = 0; i < points.current.geometry.attributes.position.count; i++) {


            let x = points.current.geometry.attributes.position.getX(i)
            let y = points.current.geometry.attributes.position.getY(i)
            let z = points.current.geometry.attributes.position.getZ(i)
            let noise = setNoise(x + t * 0.001, y, z)
            v3.set(x, y, z)
            v3.normalize().multiplyScalar(1 + 0.1 * noise)
            points.current.geometry.attributes.position.setXYZ(i, v3.x, v3.y, v3.z)
        }
        points.current.geometry.computeVertexNormals()
        points.current.geometry.attributes.position.needsUpdate = true
        deltaSum = 0;
    })
    return (
        <mesh
            ref={points}
        //position={[0, 0, 0]}
        >
            <shaderMaterial
                attach='material'
                uniforms={{
                    u_colorA: { value: new Color("#1A237E") },
                    u_colorB: { value: new Color("#E65100") },
                    u_intensity: { value: 0.3 },
                    u_time: { value: 0.0 }
                }}
                args={[TorusShaderMaterial]} />
            <sphereGeometry attach='geometry' args={[1.5, 100, 100]} />

            {/* <OrbitControls autoRotate /> */}
        </mesh>
    )
}

const BackgroundBox = styled('div')(({ theme }) => ({
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: -1,
    pointerEvents: 'none',
    background: '#0A192F',
    [theme.breakpoints.down('md')]: {
        height: '140vh',

        '& div': {
            margin: 'auto',
            marginTop: '100px',
            transform: 'scale(1)',
            width: '200vw !important',
        },
    }
}))

const CanvasBox = ({ children }: IProps) => {
    const [CanvasLeft, setCanvasLeft] = useState('-30vw')
    const [CanvasTop, setCanvasTop] = useState('18vh')
    const [CanvasSX, setCanvasSX] = useState({zIndex: -1, background:'#0A192F'})

    const mobile = useMobile()
    const { State } = useContext(LanguageContext)

    useEffect(() => {
        const changePosition = (e: Event) => {
            if (window.scrollY > window.innerHeight / 2 && !mobile) {
                setCanvasLeft('30vw')
                setCanvasTop('18vh')
            }
            else if (window.scrollY <= window.innerWidth / 2 && !mobile) {
                setCanvasLeft('-30vw')
                setCanvasTop('-8vh')
            }
            if (mobile && window.scrollY < 100) setCanvasTop('18vh')
            if (mobile && window.scrollY > 100) setCanvasTop('28vh')
            if (mobile) setCanvasLeft('0vw')
        }

        if (mobile) setCanvasLeft('0vw')
        document.addEventListener('scroll', changePosition)
        return () => document.removeEventListener('scroll', changePosition)
    }, [])

    useEffect(() => {
        console.log(State.BlobPosition)
        if (mobile && State.BlobPosition !== '0') {
            setCanvasSX({zIndex: 100002, background: 'none'})
            setCanvasTop(State.BlobPosition)
        }
        else if(mobile){
            setCanvasSX({zIndex: -1, background:'#0A192F'})
            if(window.scrollY > 100) setCanvasTop('18vh')
            else setCanvasTop('28vh')
        }
    }, [State.BlobPosition])


    return (
        <BackgroundBox sx={CanvasSX}>
            <Canvas style={{ pointerEvents: 'none', left: CanvasLeft, top: CanvasTop, transition: '.5s' }} camera={{ position: [1.5, 1.5, 1.5] }}>
                <pointLight position={[1.5, 1.5, 0]} />
                <Ball />
            </Canvas>
        </BackgroundBox>
    )
}

export default CanvasBox