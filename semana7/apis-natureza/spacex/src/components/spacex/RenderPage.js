import React from 'react';
import MissionList from './MissionList'
import RenderLaunch from './Launches/RenderLaunch'
import RocketList from './RocketList'

class RenderPage extends React.Component {
    state = {
        option: ""
    }

    onChangeOption = (event) => {
        this.setState({option: event.target.value})
    }
    
    render() {
        console.log(this.state.option)
        const choosePage = () => {
            if (this.state.option === 'mission'){
                return <MissionList />
            }  else if (this.state.option === 'launch'){
                return <RenderLaunch />
            } else {
                return <RocketList />
            }
        }

        return (
            <div>
                <h1>Bem-vindos ao SpaceX Data</h1>
                <p>Escolha qual página você deseja visualizar</p>
                <select onChange={this.onChangeOption}>
                    <option value="mission">Missões</option>
                    <option value="launch">Lançamentos</option>
                    <option value="rocket">Foguetes</option>
                </select>
                <div>{choosePage()}</div>
            </div>
        );
    }
}

export default RenderPage;
