import React from 'react'
import styled from 'styled-components'

const BlackFooter = styled.div`
    background-color: black;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`
const Github = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
`

class Footer extends React.Component {

    render() {
        return (
            <BlackFooter>
            <Github href="https://github.com/nizolnier" target="_blank"> Desenvolvido por: Nicole Zolnier</Github>
            </BlackFooter>
        );
    }
}

export default Footer;