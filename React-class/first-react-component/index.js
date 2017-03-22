import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			count: 0
		}
	}
	
    render(){
        return (
        <h1>{this.state.count}</h1>
        )
    }
    
}

ReactDOM.render(<App/>, document.getElementById("app"));