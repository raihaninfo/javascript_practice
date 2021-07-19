import React, { Component } from 'react';

class EventHandeling extends Component {

    state={
        name: ''
    }

    clickHandling= (e)=>{
        console.log(e);
    }

    inputHendler = (ev)=>{
        this.setState({
            name: ev.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.inputHendler} type="text" name="" id="" />
                <button className="btn btn-primary" onClick={this.clickHandling}>Click Me</button>
                <p>Hello {this.state.name}</p>
            </div>
        );
    }
}

export default EventHandeling;