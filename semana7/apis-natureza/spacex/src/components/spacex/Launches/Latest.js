import React from 'react'
import axios from 'axios'

class Latest extends React.Component {
    state = {
        latestList: {}
    }

    componentDidMount() {
        this.fetchLaunches()
    }

    fetchLaunches = () => {
        const apiUrl = 'https://api.spacexdata.com/v3/launches/latest'

        axios.get(apiUrl).then((response) => {
            console.log(response.data)
            this.setState({ latestList: response.data })
        }).catch((err) => {
            console.log(err.message)
        })
    }

    render() {

        return (<div>
            <h3>Lançamento mais recente</h3>
            <div>
            <p>Nome da missão: {this.state.latestList.mission_name}</p>
            <p>Ano: {this.state.latestList.launch_year}</p>
            </div>
        </div>)
    }
}

export default Latest;