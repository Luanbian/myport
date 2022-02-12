import React from "react";
import {IconsMedia, Button, In, SocialMedia, Total} from './contactstyled';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import contactus from '../../styles/img/contact/contant.svg';
import Email from './email';

function Contact(){
  return(
    <>
      <Total>
        <img src={contactus} alt="undraw-contact-us" />
        <IconsMedia>
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
        </IconsMedia>
      </Total>
      <Email/>
    </>
  )
}

export default Contact;