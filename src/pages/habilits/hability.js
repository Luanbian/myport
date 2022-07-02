import React, { Suspense } from "react";
import {Wait, Title, Intro, Topo, ContentHab, DescriptionTopo, ColumOne} from './styledhabilits';
import {BackHead} from '../../pages/contact/emailstyled';
import { Canvas } from '@react-three/fiber';
import Earth from "../../snipeds/sphere/sphere";
import { HabilityListOne, HabilityListTwo } from "../../components/HabilityList";
import { Array_habilits_One, Array_habilits_Two} from "../../snipeds/listofhabilits/Array_habilits";

function Hability(){
    return(
        <>
            <BackHead></BackHead>
            <Topo>
                <Intro>
                    <Title> Habilidades </Title>
                    <DescriptionTopo>
                        Minha Habilidades giram em torno do Javascript por ser uma linguagem muito poderosa, para o front-end eu gosto muito do react.js, para o back-end considero muito o uso do node.js e quando o assunto é mobile o react-native resolve!
                    </DescriptionTopo>
                </Intro>
                <div>
                    <Wait>
                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth />
                            </Suspense>
                        </Canvas>
                    </Wait>
                </div>
            </Topo>
            <ContentHab>
                <ColumOne>
                    <HabilityListOne Array_habilits_One={Array_habilits_One}/>
                </ColumOne>
                <ColumOne>
                    <HabilityListTwo Array_habilits_Two={Array_habilits_Two}/>
                </ColumOne>
            </ContentHab>
        </>
    )
}

export default Hability;