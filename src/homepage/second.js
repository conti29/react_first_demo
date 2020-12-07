import React from 'react'
import './second.css'

class second extends React.Component {
  state = {
  }

  handle = () => {
    this.props.getChild(this.state.sendToFather)
  }

  render() {
    return (
      <div className="secondBox">
        <p>first传过来的数据: {this.props.toBrother}</p>
      </div>
    )
  }
}


export default second 