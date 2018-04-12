
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

			<h1>HOLA MUNDO</h1>
			
			</div>
		);
	};
}