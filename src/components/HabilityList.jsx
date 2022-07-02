import React from 'react';
import {Imagehab, CardHab, Description} from '../pages/habilits/styledhabilits';

export function HabilityListOne(props){
    const Array_habilits_First = props.Array_habilits_One;

    const ListItemOne = Array_habilits_First.map((habilits) => 
        <div data-aos="fade-right">
                <CardHab key={habilits.id}>
                    <Imagehab src={habilits.img} alt="imagens das habilidades"/>
                    <Description>{habilits.text}</Description>
                </CardHab>
        </div>
    )

    return (<> {ListItemOne} </>)
}

export function HabilityListTwo(props){
    const Array_habilits_Second = props.Array_habilits_Two;

    const ListItemTwo = Array_habilits_Second.map((habilits) =>
        <div data-aos="fade-right">
            <CardHab key={habilits.id}>
                <Imagehab src={habilits.img} alt="imagens das habilidades"/>
                <Description>{habilits.text}</Description>
            </CardHab>
        </div>
    )

    return (<>{ListItemTwo}</>)
}