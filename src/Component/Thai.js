
import React, {Component} from 'react'

export default class Thai extends Component{

	constructor(props){
		super(props)

		this.state = {
			nombre: this.props.nombre || '',
		}
	}

	render(){
		return(
			<div>
			<input 
				value={this.state.nombre}
				placeholder="Escribe tu nombre"
				onechange={(e) => this.setState({nombre: e.target.value})}
			/>
			<h1>HOLA MUNDO</h1>
			
			</div>
		);
	};
}

//dos botones 