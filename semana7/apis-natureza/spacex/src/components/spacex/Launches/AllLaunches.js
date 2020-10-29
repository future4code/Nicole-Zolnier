import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: blue;
    
`
class AllLaunches extends React.Component {

    state = {
        totalList: []
    }

    componentDidMount() {
        this.fetchLaunches()
    }

    fetchLaunches = () => {
        const apiUrl = 'https://api.spacexdata.com/v3/launches'

        axios.get(apiUrl).then((response) => {
            console.log(response.data)
            this.setState({ totalList: response.data })
        }).catch((err) => {
            console.log(err.message)
        })
    }
    render() {
        const renderTotalList = this.state.totalList.map((item) => {
            return (<div key={item.mission_id}>
                <p>Nome da missão: {item.mission_name}</p>
                <p>Ano: {item.launch_year} </p>
                <Link target="_blank" href={item.links.wikipedia}>Ver mais</Link>

            </div>)
        })

        return (
            <div>
                <h3>Todos os Lançamentos</h3>
                {renderTotalList}
            </div>
        );
    }
}

export default AllLaunches;