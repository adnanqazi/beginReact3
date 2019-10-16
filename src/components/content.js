import React, {Component} from 'react';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({counter: ++this.state.counter})
  }

  render() {
    return (
      <div>
      <ClickCounterButton counter={this.state.counter} handler={this.handleClick}/>
      <br />
      <Counter value={this.state.counter} />
      </div>
    )
  }
}

const ClickCounterButton = props => {
  return <button onClick={props.handler}className="btn btn-danger">
          you can't touch this
        </button>
}

const Counter = props => <span>Clicked {props.value} times.</span>
export default Content
