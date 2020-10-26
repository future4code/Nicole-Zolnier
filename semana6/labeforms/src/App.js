import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

class App extends React.Component  {
  state = {
    etapa: 1
  }

  
  proximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render(){
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1: 
          return <Etapa1 clica={this.proximaEtapa}/>;
        case 2: 
          return <Etapa2 clica={this.proximaEtapa}/>;
        case 3:
          return <Etapa3 clica={this.proximaEtapa}/>;
        case 4:
          return <Final/>;
      }
    }
  
    return (
      <div>
        {renderizaEtapa()}
  
      </div>
      
    );
  }
}

export default App;
