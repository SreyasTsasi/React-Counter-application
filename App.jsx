import React,{Component} from "react";
import "./app.css";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    };
    decrement=()=>{
        this.setState({count:this.state.count-1});
    };
    render(){
        return(
            <div className="Counter"> {/* Add the Counter class */}
            <p className="counter-display">Count: {this.state.count}</p>
            <div className="button-container">
              <button onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>Decrement</button>
            </div>
          </div>
        )
    }
}

export default Counter;