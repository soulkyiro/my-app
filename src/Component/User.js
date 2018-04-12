import React, {Component} from 'react'
import axios from 'axios';

export default class User extends Component{

	constructor(props){
		super(props)

		this.state = {
	    	userList: []
		};
	}

	state = { 
	    userList: []
	};

	componentDidMount() {
    	axios.get(`https://jsonplaceholder.typicode.com/posts`)
      	.then(response => {
        	const userList = response.data;
        	this.setState({ userList });
      	})
  	}

	render(){
		return(
			<div>
		      <ul>
		        { this.state.userList.map((user) => 
		        	<li>{user.id}</li>
		        )}
		      </ul>
		    </div>
		);
	}
}
// falta mostrar
//		        	<li>{user.userId}</li>
//		        	<li>{user.title}</li>
//		        	<li>{user.body}</li>