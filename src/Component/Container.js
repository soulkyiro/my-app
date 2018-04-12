import React, {Component} from 'react'

import Thai from './Thai';
import Operation from './Operation';
import Timer from './Timer';
import User from './User';

export default class Container extends Component{

	render(){
		return(
			<div>
				<Thai />
				<Operation />
				<Timer />
				<User />
		    </div>
		);
	}
}
//install axion -S