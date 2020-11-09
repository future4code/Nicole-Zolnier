// import styled from 'styled-components'
import React from "react";
import CreateUser from './components/CreateUser'
import RenderUsers from './components/RenderUsers'



class App extends React.Component {
  state = {
    seeList: false
  }

  // funçao pra mudar pagina
  checkoutOtherPage = () => {
    this.setState({ seeList: !this.state.seeList })
  }

  render() {
    // funçao pra renderizar a lista correta
    const renderScreen = () => {
      if (this.state.seeList) {
        return <RenderUsers goBack={this.checkoutOtherPage} />

      } else {
        return <CreateUser nextPage={this.checkoutOtherPage} />;
      }
    }
    return (
      <div>
        {renderScreen()}
      </div>
    );

  }
}

export default App;
