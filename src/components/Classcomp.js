import React, { Component } from 'react'

export class Classcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            counter: 1
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                <h1>Sample Class Component</h1>
                <p>count:{this.state.count}</p>
                <p>count:{this.state.counter}</p>
                <button onClick={this.incrementCount}>Increment count</button>
            </div>
        )
    }
}

export default Classcomp
