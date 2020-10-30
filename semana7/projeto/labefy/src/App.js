import './App.css';
import React from 'react'
import PlayList from './components/PlayList'
import CreatePlaylist from './components/CreatePlaylist'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>teste</h1>
        <PlayList />
        <CreatePlaylist />
      </div>
    );
  }
}

export default App;