import React, { Suspense } from "react";
import {Wait, CardBackend, CardFrontend, CardTotal, Title, Description, Card, Intro, HardSkill, SoftSkills, CardSoft, CardMobile} from './styledhabilits';
import { Canvas } from '@react-three/fiber';
import Earth from "../../components/sphere/sphere";

function Hability(){
    return(
        <>
            <Card>
                <Wait>
                    <Canvas>
                        <Suspense fallback={null}>
                            <Earth /> 
                        </Suspense>
                    </Canvas>
                </Wait>
                <Intro>
                    <Title>
                        Habilidades
                    </Title>
                    <Description>
                        Lorem lorem 
                    </Description>
                </Intro>
            </Card>

            <CardTotal>
                <HardSkill>Hard Skills</HardSkill>
                <CardFrontend>
                    
                </CardFrontend>
                <CardBackend>

                </CardBackend>
                <CardMobile>

                </CardMobile>
                <SoftSkills>Soft Skills</SoftSkills>
                <CardSoft>

                </CardSoft>
            </CardTotal>
        </>
    )
}

export default Hability;