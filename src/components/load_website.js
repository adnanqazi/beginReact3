import React from 'react';
import ReactDOM from 'react-dom'

const LoadWebsite = (ChildComponent) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {label: 'Run', counter: 0}
      //note the bind when method is being sent to others in props
      //its this.state.handleClick on the LHS
      this.state.handleClick = this.handleClick.bind(this)
    }
    getUrl() { //the method is actually invoked from children
      return 'preamble.txt'
    }

    handleClick(event) {
      var iframe = document.getElementById('frame').src =
      this.getUrl()
      this.setState(()=> (
        {
          label: 'Ran' + this.state.counter++
        }
      ))
    }

    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this))
    }

    render() {
      console.log(this.state)
      return <ChildComponent {...this.state} {...this.props} />
    }
  }
  _LoadWebsite.displayName = 'EnhancedComponent'
  return _LoadWebsite
}

const ChildButton = props =>
<button className="btn btn-primary" onClick={props.handleClick}>
  {props.label}
</button>


const Link = (props) =>
<a onClick={props.handleClick} href="#">{props.label}</a>

const Logo = (props) =>
<img onClick={props.handleClick} width="40" src="kashmir.jpg" href="#"/>

const EnhancedButton = LoadWebsite(ChildButton)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class TopLevelContent extends React.Component {

  render() {

    return (
      <div>
      <EnhancedButton />
      <br />
      <br />
      <EnhancedLink />
      <br />
      <br />
      <EnhancedLogo />
      <br />
      <br />
      <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  }
}

export default TopLevelContent
