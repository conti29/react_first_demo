import React from 'react'
import './first.css'
import PublicA from '../publicComponents/publicA'
// import { Consumer } from './homepage' // 需要从定义的父组件引入才能拿到值

class first extends React.Component {
  state = {
    // firstTitle: 'first组件的标题',
    // sendToFather: '这是子组件传给父组件的数据',
    // sendToBrother: '这是兄弟传给兄弟组件的'
  }

  // handle = () => {
  //   this.props.getChild(this.state.sendToFather)
  // }

  // handleBrother = () => {
  //   this.props.getBrother(this.state.sendToBrother)
  // }
  

  render() {
    return (
      
      <div className="firstBox">
        {/* <Consumer>{data => <p>AAAAA接收到的数据为：{data}</p>}</Consumer>
        <p>{this.state.firstTitle}</p>
        <p>父传子的数据: {this.props.count}</p>
        <button onClick={this.handle}>点我,子传父</button>
        <button onClick={this.handleBrother}>点我,传兄弟</button> */}
        <div>first组件===公共组件PublicA: <PublicA name={'first'} /></div>
      </div>
      
    )
  }
}


export default first 