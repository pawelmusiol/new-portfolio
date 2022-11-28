import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"
import { Mesh, MathUtils, Clock, Vector3, BufferGeometryUtils, ShaderMaterial, Color } from 'three'
import { createNoise3D } from 'simplex-noise'
import alea from 'alea'

interface IProps {
    children?: JSX.Element[] | JSX.Element
}


const TorusShaderMaterial = {
    vertexShader: `
    uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;


// Classic Perlin 3D Noise 
// by Stefan Gustavson
//
vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

// End of Perlin Noise Code

void main() {
  vUv = uv;

  vDisplacement = cnoise(position + vec3(2.0 * u_time));

  vec3 newPosition = position + normal * (u_intensity * vDisplacement);

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

    `,
    fragmentShader: `
    uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity;

  vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
  
  gl_FragColor = vec4(color ,1.0);
}
    `
};

const Cursor = ({ }) => {


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

    let seed = alea(Date.now())

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


const CanvasBox = ({ children }: IProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null!)
    const [CanvasLeft, setCanvasLeft] = useState('-30vw')
    const [CanvasTop, setCanvasTop] = useState('-18vh')

    useEffect(() => {
        const changePosition = (e: Event) => {
            console.log(canvasRef.current.style.left)
            if (window.scrollY > window.innerHeight / 2) {
                setCanvasLeft('30vw')
                setCanvasTop('18vh')
            }
            else if (window.scrollY <= window.innerWidth / 2) {
                setCanvasLeft('-30vw')
                setCanvasTop('-8vh')
            }
        }

        document.addEventListener('scroll', changePosition)
        return () => document.removeEventListener('scroll', changePosition)
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: -1, pointerEvents: 'none', background: '#555' }}>
            <Canvas ref={canvasRef} style={{ pointerEvents: 'none', left: CanvasLeft, top: CanvasTop, transition: '.5s' }} camera={{ position: [1.5, 1.5, 1.5] }}>
                <pointLight position={[1.5, 1.5, 0]} />
                <Cursor />
            </Canvas>
        </div>
    )
}

export default CanvasBox