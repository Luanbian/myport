import React from "react";
import {IconsMedia, Button, In, SocialMedia, Total, Comp, ImgUnDraw} from './contactstyled';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import contactus from '../../styles/img/contact/contant.svg';
import Email from './email';

function Contact(){
  return(
    <>
      <Total>
        <ImgUnDraw src={contactus} alt="undraw-contact-us" />
        <IconsMedia>
          <SocialMedia>
            <Button>
              <Comp href="https://github.com/Luanbian" target="_blank">
                <In><GitHubIcon fontSize="large"/></In>
              </Comp>
            </Button>
          </SocialMedia>
          <SocialMedia>
            <Button>
              <Comp href="https://www.instagram.com/bianchiniluan/" target="_blank">
                <In><InstagramIcon fontSize="large"/></In>
              </Comp>
            </Button>
          </SocialMedia>
          <SocialMedia>
          <Button>
            <Comp href="https://www.linkedin.com/in/luan--almeida/" target="_blank">
              <In><LinkedInIcon fontSize="large"/></In>
            </Comp>
          </Button>
          </SocialMedia>
        </IconsMedia>
      </Total>

      <Email/>
    </>
  )
}

export default Contact;