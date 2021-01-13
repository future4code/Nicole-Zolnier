import React from 'react';
import Latest from './Latest'
import AllLaunches from './AllLaunches'
import Upcoming from './Upcoming'

class LaunchList extends React.Component {
  state = {
    option: ""
  }

  onChangeOption = (event) => {
    this.setState({ option: event.target.value })
  }

  render() {
    const renderPage = () => {
      if (this.state.option === 'all'){
        return <AllLaunches />
    }  else if (this.state.option === 'latest'){
        return <Latest />
    } else {
        return <Upcoming />
    }
    }
    return (
      <div>
        <h1>Lista de Lançamentos</h1>
        <p>Escolha quais você quer ver</p>
        <select onChange={this.onChangeOption}>
          <option value="all">Todos</option>
          <option value="latest">Mais recente</option>
          <option value="upcoming">Próximos</option>
        </select>
        {renderPage()}
      </div>
    );
  }
}

export default LaunchList;