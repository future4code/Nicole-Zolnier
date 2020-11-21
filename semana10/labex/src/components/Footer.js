import React from "react";
import styled from "styled-components";
import logo from "../assets/white-starkx.svg";
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import { useHistory } from 'react-router-dom'

const DivFooter = styled.div`
  background-color: #55545c;
  height: 45vh;
  padding: 0 10em;
`

const DivImg = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px 0;

`

const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
`

const Img = styled.img`
  width: 10%;

`

const ImgLogo = styled.img`
  width: 90%;

`

const SectionMedias = styled.section`
  display: flex;

`

const SectionLogo = styled.section`
  display: flex;
  justify-content: flex-end;

`

const P = styled.p`
 font-weight: bold;
`

const Copyright = styled.p`
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
`

const A = styled.a`
  text-decoration: none;
  color: #222222;
  &:hover{
    text-decoration: none;
    color: black;
  }
`

function Footer() {

  const history = useHistory()

  const goToHome = () => {
    history.push("/")
  }

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
    <DivFooter>
      <DivImg>
        <SectionMedias>
          <a href="https://www.instagram.com/" target="_blank">
            <Img src={instagram} alt="Logotipo instagram" />
          </a>
          <a href="https://facebook.com/" target="_blank">
            <Img
              src={facebook}
              alt="Logotipo Facebook"
            />
          </a>
          <a href="https://twitter.com/login?lang=pt" target="_blank">
            <Img
              src={twitter}
              alt="Logotipo Twitter"
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <Img
              src={linkedin}
              alt="Logotipo Linkedin"
            />
          </a>
        </SectionMedias>
        <SectionLogo>
          <ImgLogo src={logo} />
        </SectionLogo>
      </DivImg>

      <DivText>
        <section>
          <P>Atendimento: </P>
          <p>atendimento@starkx.com </p>

          <P>Sugestões: </P>
          <p>sugestoes@starkx.com</p>
        </section>
        <section>
          <P onClick={goToAboutUs}>Sobre nós</P>
          <P onClick={goToApply}>Inscreva-se</P>
          <P onClick={goToTrips}>Viagens</P>
          <P onClick={goToError}>Erro</P>
        </section>

      </DivText>
      <Copyright><A>Desenvolvido por Nicole Zolnier</A></Copyright>
    </DivFooter>
  );

}

export default Footer;