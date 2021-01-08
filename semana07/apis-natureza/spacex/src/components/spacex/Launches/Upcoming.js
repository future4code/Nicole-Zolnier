import React from 'react'
import axios from 'axios'

class Upcoming extends React.Component {
    state = {
        upcomingList: []
    }

    componentDidMount () {
        this.fetchLaunches()
    }

    fetchLaunches = () => {
        const apiUrl = 'https://api.spacexdata.com/v3/launches/upcoming'
    
        axios.get(apiUrl).then((response) => {
          console.log(response.data)
          this.setState({upcomingList: response.data})
        }).catch((err) => {
          console.log(err.message)
        })
    }
    
    render () {
        const renderUpcomingList = this.state.upcomingList.map((item) => {
            return ( <div key={item.mission_id}>
                <p>Nome da missão: {item.mission_name}</p>
                <p>Ano: {item.launch_year} </p>
            </div>)
        })

        return(<div>
            <h3>Próximos Lançamentos</h3>
            {renderUpcomingList}
        </div>)
    }
}

export default Upcoming;