import { useLoader, useFrame } from "@react-three/fiber";
import React, { useRef }from "react";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import Texture from '../../styles/img/habilits/habround.png';

function Earth(props){
    const [textureMap] = useLoader(TextureLoader, [Texture])
    const earthRef = useRef();
    useFrame(({ clock })=>{
        const elapsedTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapsedTime / 2
    })
    return(
        <>
            <ambientLight intensity={1} />
            <mesh ref={earthRef}>
                <sphereGeometry args={[ 2.8, 32, 32 ]}/>
                <meshPhongMaterial specularMap = {textureMap} />
                <meshStandardMaterial map={textureMap} />
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={true} 
                    enableRotate={true} 
                    panSpeed={0.5} 
                    rotateSpeed={0.4} 
                />
            </mesh>
        </>
    )
}

export default Earth;