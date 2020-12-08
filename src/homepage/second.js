import React from 'react'
import './second.css'
import PublicA from '../publicComponents/publicA'

class second extends React.Component {
  state = {
  }

  handle = () => {
    this.props.getChild(this.state.sendToFather)
  }

  render() {
    return (
      <div className="secondBox">
        {/* <p>first传过来的数据: {this.props.toBrother}</p> */}
        <div>second组件===公共组件PublicA: <PublicA list={[1,2,3,4,5]} /></div>
      </div>
    )
  }
}


export default second 