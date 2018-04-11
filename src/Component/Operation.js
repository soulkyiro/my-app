import React, {Component} from 'react'

export default class Operation extends Component{

	  constructor(props) {
	    super(props);
	    this.state = {
	    	op: this.props.op || 'add',
	    	firstNumber: 0,
	    	secondNumber: 0,
	    	result: 0,
		};

	    this.handleChangeFirstNumber = this.handleChangeFirstNumber.bind(this);
	    this.handleChangeSecondNumber = this.handleChangeSecondNumber.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChangeOperation = this.handleChangeOperation.bind(this);
	  }

	    handleSubmit(event) {
	    	this.state.result = 0;
	    	if(this.state.op == "add"){
    			this.state.result = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
	    	}
	    	else{
	    		this.state.result = parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber);
	    	}

		    alert('El resultado es: ' + this.state.result);
		    event.preventDefault();
	  	}	

  	  	handleChangeOperation(event) {
			this.setState({op: event.target.value});
  		}

  		handleChangeFirstNumber(event) {
			this.setState({firstNumber: event.target.value});
  		}
  		handleChangeSecondNumber(event) {
			this.setState({secondNumber: event.target.value});
  		}

	render(){
		return(
			<div>
				<h1>Operaciones</h1>

				<form onSubmit={this.handleSubmit}>
			        <select value={this.state.op} onChange={this.handleChangeOperation}>
			            <option value="add">Suma</option>
			            <option value="mult">Multiplicacion</option>
			        </select>
			        <br />
			        <label>
				          Primer Numero: 
				          <input type="text" 
				          placeholder="Escribe un numero" 
				          onChange={this.handleChangeFirstNumber} 
				          />
			        </label>
			        <br />
	    	        <label>
				          Segundo Numero: 
				          <input type="text" 
				          placeholder="Escribe un numero" 
				          onChange={this.handleChangeSecondNumber} 
				          />
			        </label>
					<br />	
			        <input type="submit" value="Submit" />
		        </form>
			</div>
		);
	};
}