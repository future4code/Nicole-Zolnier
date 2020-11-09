import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: blue;
    
`

class RocketList extends React.Component {
    state = {
        rocketList: []
    }

    componentDidMount () {
        this.fetchRockets()
    }

    fetchRockets = () => {
        const apiUrl = 'https://api.spacexdata.com/v3/rockets'
    
        axios.get(apiUrl).then((response) => {
          console.log(response.data)
          this.setState({rocketList: response.data})
        }).catch((err) => {
          console.log(err.message)
        })
    }
    render() {
        const renderRocketList = this.state.rocketList.map((item) => {
            return ( <div key={item.rocket_id}>
                <p>Nome do Foguete: {item.rocket_name}</p>
                
                <p>País: {item.country} </p>
                <Link target="_blank" href={item.wikipedia}>Ver mais</Link>
            </div>)
        })

        return (
            <div>
                <h1>Foguetes da SpaceX</h1>
                {renderRocketList}
            </div>
        );
    }
}

export default RocketList;