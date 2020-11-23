import React from "react";
import logo from "../../assets/white-starkx.svg";
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import { useHistory } from 'react-router-dom'
import {FooterContainer, FirstContainer, SecondContainer, SocialLogo, Logo, SectionMedias, SectionLogo, Bold, BoldLink, Copyright, Link, Text} from './styles'

function Footer() {

  const history = useHistory()

  const goToAboutUs = () => {
    history.push("/about")
  }

  const goToApply = () => {
    history.push("/apply")
  }

  const goToTrips = () => {
    history.push("/trips")
  }

  const goToError = () => {
    history.push("/error")
  }

  return (
    <FooterContainer>
      <FirstContainer>
        <SectionLogo>
          <Logo src={logo} />
        </SectionLogo>
        <SectionMedias>
          <a href="https://www.instagram.com/" target="_blank">
            <SocialLogo src={instagram} alt="instagram" />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <SocialLogo
              src={facebook}
              alt="facebook"
            />
          </a>
          <a href="https://twitter.com/login?lang=pt" target="_blank">
            <SocialLogo
              src={twitter}
              alt="twitter"
            />
          </a>
        </SectionMedias>
        
      </FirstContainer>

      <SecondContainer>
        <section>
          <Bold>Address</Bold>
          <Text>890 Fifth Avenue</Text>
          <Text>New York, NY 10003, United States</Text>
          <br></br>
        </section>
        <section>
          <Bold>Customer Service </Bold>
          <Text>cservice@starkx.com </Text>

          <Bold>Suggestions </Bold>
          <Text>suggestions@starkx.com</Text>
        </section>
        <section>
          <BoldLink onClick={goToAboutUs}>About us</BoldLink>
          <BoldLink onClick={goToApply}>Apply</BoldLink>
          <BoldLink onClick={goToTrips}>Trips</BoldLink>
          <BoldLink onClick={goToError}>Error</BoldLink>
        </section>

      </SecondContainer>
      <Copyright><Link >Developed by Nicole Zolnier</Link></Copyright>
    </FooterContainer>
  );

}

export default Footer;