import React, {Component} from 'react'
import axios from 'axios';

const List = (props) => (
	props.users.map((user) => <ListItem key={user.id}> user={user}/>)
)

const ListItem = (props) => (
	<li>{props.user.id}</li>
)
export default class User extends Component {

	constructor (props){
		super(props)

		this.state = {
	    	userList: []
		};
	}

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
		      <List users={this.stage.userList} />
		    </div>
		);
	}
}
