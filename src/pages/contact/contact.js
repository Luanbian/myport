import React from "react";
import {Total, Button, In, SocialMedia} from './contactstyled';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
//import Email from './email';

function Contact(){
  return(
    <>
      <Total>
        <SocialMedia>
          <Button>
            <In><GitHubIcon fontSize="large"/></In>
          </Button>
        </SocialMedia>
        <SocialMedia>
          <Button>
            <In><InstagramIcon fontSize="large"/></In>
          </Button>
        </SocialMedia>
        <SocialMedia>
        <Button>
          <In><LinkedInIcon fontSize="large"/></In>
        </Button>
        </SocialMedia>
      </Total>
      {/*<Email/>*/}
    </>
  )
}

export default Contact;