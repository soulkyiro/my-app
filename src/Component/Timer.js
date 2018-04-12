import React, {Component} from 'react'

export default class Timer extends Component{

	constructor(props) {
	    super(props);
	    this.state = { 
	    	date: 0
	    };
	}

	componentDidMount(){
		setInterval(() => {
			this.setState({date: new Date().toLocaleTimeString()})
		},1000 )
	}

	render(){
		return(
			<div>
		      <h2>{this.state.date}</h2>
		    </div>
		);
	}
}