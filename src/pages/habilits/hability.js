import React, { Suspense } from "react";
import {Wait, CardBackend, CardFrontend, CardTotal} from './styledhabilits';
import { Canvas } from '@react-three/fiber';
import Earth from "../../components/sphere/sphere";

function Hability(){
    return(
        <>
            <Wait>
                <Canvas>
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </Wait>
            <CardTotal>
                <CardFrontend>

                </CardFrontend>
                <CardBackend>

                </CardBackend>
            </CardTotal>
        </>
    )
}

export default Hability;