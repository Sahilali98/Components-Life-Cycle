import React, { Component } from 'react'

export class ComponentsLifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            seconds: 0,
            isRunning : true
        } 
    }

    timer = () => {
        // this is my
        this.setState({ 
            seconds : this.state.seconds+1
        })

        // this is madam
        // this.setState(currentState => ({seconds : currentState.seconds+1}));
    }

    componentDidMount() {
        this.interval = setInterval(this.timer,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    stop = () => {
        clearInterval(this.interval);
        this.setState({
            isRunning : false
        })
    }

    restart = () => {
        window.location.reload();
    }




  render() {
    return (
      <div className='container'>
        <h1>{this.state.seconds}</h1>
        {this.state.isRunning ? <button onClick={this.stop}>Stop Timer</button> : <button onClick={this.restart}>Restart</button>}
      </div>
    )
  }
}

export default ComponentsLifeCycle
