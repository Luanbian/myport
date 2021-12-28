import React from 'react';

function Email(){
    return(
        <>
            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="0df9efde-d3a4-4ac9-aaf6-b1b6e6a2bf1b"/>
                <input type="text" name="name" placeholder='Seu nome por favor'/>
                <input type="text" name="subject" />
                <textarea name="message"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Email;