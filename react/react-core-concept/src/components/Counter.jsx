import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 1,
            color: 'black'
        }
    }

    decrease = ()=>{
        this.setState({
            count: this.state.count -1
        })
        if(this.state.count<=2){
            this.setState({
                color: 'red'
            })
        }else if(this.state.count>=10){
            this.setState({
                color: 'green'
            })
        }else{
            this.setState({
                color: 'black'
            })
        }
    }
    increase = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}><button onClick={this.decrease}> - </button> <span>{this.state.count}</span><button onClick={this.increase}>+</button></h1>
            </div>
        );
    }
}

export default Counter;