import React from "react";
import {Total, Button, Bg, In} from './contactstyled';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact(){
    return(
        <Total className="con-social">
            <Button>
                <In className="ibx"></In>
                <GitHubIcon/>
                <Bg className="bg"></Bg>
            </Button>
            <Button>
                <In></In>
                <InstagramIcon/>
                <Bg></Bg>
            </Button>
            <Button>
                <In></In>
                <LinkedInIcon/>
                <Bg></Bg>
            </Button>
        </Total>
    )
}

(function Move(){
    const btns = document.querySelectorAll('.con-social-btns button')
    btns.forEach((item) => {
    item.addEventListener('mousemove', (evt) => {
        const x = evt.layerX - 60
        const y = evt.layerY - 60
        const bg = evt.target.querySelector('.bg')
        const i = evt.target.querySelector('.ibx')
        bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`
        i.style.transform = `translate(${x / 4}px, ${y / 4}px)`
    })

    item.addEventListener('mouseenter', (evt) => {
        const bg = evt.target.querySelector('.bg')
        const i = evt.target.querySelector('.ibx')
        bg.style.transition = 'all .15s ease'
        i.style.transition = 'all .15s ease'
        setTimeout(() => {
        bg.style.transition = ''
        i.style.transition = ''
        }, 150);
    })

    item.addEventListener('mouseleave', (evt) => {
        const bg = evt.target.querySelector('.bg')
        const i = evt.target.querySelector('.ibx')
        bg.style.transition = 'all .25s ease'
        i.style.transition = 'all .25s ease'
        bg.style.transform = `translate(${0}px, ${0}px)`
        i.style.transform = `translate(${0}px, ${0}px)`

        setTimeout(() => {
        bg.style.transition = ''
        i.style.transition = ''
        }, 250);
    })
    })
});

export default Contact;