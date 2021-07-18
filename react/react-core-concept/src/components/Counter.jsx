import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 1
        }
    }

    decrease = ()=>{
        this.setState({
            count: this.state.count -1
        })
    }
    increase = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        return (
            <div>
                <h1><button onClick={this.decrease}> - </button> <span>{this.state.count}</span><button onClick={this.increase}>+</button></h1>
            </div>
        );
    }
}

export default Counter;