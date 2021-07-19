import React, { Component } from 'react';

class EventHandeling extends Component {

    state={
        name: ''
    }

    inputHendler = (ev)=>{
        this.setState({
            name: ev.target.value
        })
    }

    render() {
        return (
            <div>
                <input className='form-control' onChange={this.inputHendler} type="text" />
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default EventHandeling;