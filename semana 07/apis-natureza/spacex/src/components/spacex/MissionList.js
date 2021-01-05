import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: blue;
    
`

class MissionList extends React.Component {

    state = {
        missionList: [],
    }

    componentDidMount () {
        this.fetchMissions()
    }

    fetchMissions = () => {
        const apiUrl = 'https://api.spacexdata.com/v3/missions'
    
        axios.get(apiUrl).then((response) => {
          console.log(response.data)
          this.setState({missionList: response.data})
        }).catch((err) => {
          console.log(err.message)
        })
    }
    

    render() {
        const renderMissionList = this.state.missionList.map((item) => {
        return ( <div key={item.mission_id}>
            <p>Nome da Missão: {item.mission_name}</p>
            
            <p>Fabricantes: {item.manufacturers} </p>
            <Link target="_blank" href={item.wikipedia}>Ver mais</Link>
        </div>)
        })

        return (
            <div>
                <h1>Lista de Missões</h1>
                <div>{renderMissionList}</div>
            
            </div>
        );
    }
}

export default MissionList;