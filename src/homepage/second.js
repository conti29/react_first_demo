import React from 'react'
import './second.css'
import PublicA from '../publicComponents/publicA'
import withMouse from '../publicComponents/mouse2'

const MousePosition = withMouse(PublicA)

class second extends React.Component {
  state = {
    x: 1,
    y: 2,
  }



  handle = () => {
    this.props.getChild(this.state.sendToFather)
  }

  

  render() {

    return (
      <div className="secondBox">
        {/* <p>first传过来的数据: {this.props.toBrother}</p> */}
        <div>second组件===公共组件PublicA: <PublicA list={[1,2,3,4,5]} /></div>
        <MousePosition>
          {(mouse)=> <p>鼠ASSAS标当前位置 {mouse.x}，{mouse.y}</p>} 
        </MousePosition>
      </div>
    )
  }

 
}


export default second 