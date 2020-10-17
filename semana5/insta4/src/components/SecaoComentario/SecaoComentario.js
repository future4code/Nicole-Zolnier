import React, { Component } from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorDoInput: ""
	}

	onChangeComentario = (event) => {
		this.setState({ valorDoInput: event.target.value })
		console.log(event.target.value)
	}
	

	render() {
		
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorDoInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={()=>this.props.aoEnviar(this.state.valorDoInput)}>Enviar</button>
			
		</div>
	}
}

export default SecaoComentario;