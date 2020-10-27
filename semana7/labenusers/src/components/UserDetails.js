// import styled from 'styled-components'
import React from "react";

class UserDetails extends React.Component {
    render() {
        return (
            <div>
                <p>teste</p>
                <button onClick={this.props.goBack}></button>
            </div>
        );

    }
}

export default UserDetails;