import React, { Component,PureComponent } from 'react'

export class Gunjan extends PureComponent {
    constructor(){
        super();
        this.state=
        {
            data:10
        }
    }
    gunjan=()=>
    {
        this.setState({data:10})
    }
    render() {
        console.warn(this.state);
        return (
            <div>
                <h1>Pure Component {this.state.data}</h1>
                <button onClick={this.gunjan}>Click me</button>
                
            </div>
        )
    }
}

export default Gunjan
