import React from "react";
import styled from "styled-components";
import logo from "../assets/white-starkx.svg";
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

const DivFooter = styled.div`
  background-color: black;
  height: 50vh;
  padding: 0 10em;
`

const DivImg = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px 0;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 0;
  }
`

const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
`

const Img = styled.img`
  width: 10%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 30%;
  }
`

const ImgLogo = styled.img`
  width: 90%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80%;
  }
`

const SectionMedias = styled.section`
  display: flex;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 2em 0 0 2em;
  }
`

const SectionLogo = styled.section`
  display: flex;
  justify-content: flex-end;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    justify-content: center;
  }
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
    color: #F61B1B;
  }
`

function Footer() {

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
            <p>atendimento@fstarkx.com </p>
            
            <P>Sugestões: </P>
            <p>sugestoes@starkx.com</p>
          </section>

        </DivText>
        <Copyright><A>Desenvolvido por Nicole Zolnier</A></Copyright>
      </DivFooter>
    );
  
}

export default Footer;