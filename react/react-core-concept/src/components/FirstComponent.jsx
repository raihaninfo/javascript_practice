import { Component } from 'react'

class FirstComponent extends Component{

    render(){
        return (
            <div>
                <h2>My name is {this.props.name}</h2>
                <p>i'm web developer</p>
            </div>
        )
    }
}

export default FirstComponent