import React from "react";
import styled from "styled-components";
import logo from "../assets/white-starkx.svg";
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import { useHistory } from 'react-router-dom'

const FooterContainer = styled.div`
  background-color: black;
  height: 45vh;
  padding: 0 10em;
`

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px 0;

`

const SecondContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid white;
  border-left: none;
  border-right: none;
`

const SocialLogo = styled.img`
  width: 30%;
  justify-content: flex-start;
`

const Logo = styled.img`
  width: 90%;

`

const SectionMedias = styled.section`
  display: flex;
  margin-left: 20em;
`

const SectionLogo = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-left: 5em;
`

const Bold = styled.p`
 font-weight: bold;
 color: white;
`

const Copyright = styled.p`
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
`

const Link = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover{
    text-decoration: none;
    color: grey;
  }
`

const Text = styled.p`
  color: white;
`

function Footer() {

  const history = useHistory()

  const goToAboutUs = () => {
    history.push("/sobre")
  }

  const goToApply = () => {
    history.push("/inscricao")
  }

  const goToTrips = () => {
    history.push("/viagens")
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
            <SocialLogo src={instagram} alt="Logotipo instagram" />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <SocialLogo
              src={facebook}
              alt="Logotipo Facebook"
            />
          </a>
          <a href="https://twitter.com/login?lang=pt" target="_blank">
            <SocialLogo
              src={twitter}
              alt="Logotipo Twitter"
            />
          </a>
        </SectionMedias>
        
      </FirstContainer>

      <SecondContainer>
        <section>
          <Bold>Endereço</Bold>
          <Text>890 Fifth Avenue</Text>
          <Text>New York, NY 10003, United States</Text>
          <br></br>
        </section>
        <section>
          <Bold>Atendimento </Bold>
          <Text>atendimento@starkx.com </Text>

          <Bold>Sugestões </Bold>
          <Text>sugestoes@starkx.com</Text>
        </section>
        <section>
          <Bold onClick={goToAboutUs}>Sobre nós</Bold>
          <Bold onClick={goToApply}>Inscreva-se</Bold>
          <Bold onClick={goToTrips}>Viagens</Bold>
          <Bold onClick={goToError}>Erro</Bold>
        </section>

      </SecondContainer>
      <Copyright><Link >Desenvolvido por Nicole Zolnier</Link></Copyright>
    </FooterContainer>
  );

}

export default Footer;