import React from 'react'
import { Button } from 'antd';
import './homepage.css'



class homepage extends React.Component {
  constructor() {
    super()
    this.txtRef = React.createRef()
  }

  state = {
    count: 0,
    usename: '',
    password: '',
    txtRefValue: '', // 非受控
  }
  // 数量++
  onIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  // 数量--
  enIncrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  // 处理表单多个数据
  handleFrom = e => {
    if (e.target.name === 'usename') {
      this.setState({
        usename: e.target.value,
      })
    } else if (e.target.name === 'password') {
      this.setState({
        password: e.target.value
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="btnbox">
          <Button className="btn" onClick={() => this.onIncrement()} type="primary">+ count</Button>
          <Button className="btn" onClick={() => this.enIncrement()} type="primary">- count</Button>
        </div>
        <div className="itemInput">
          <span>计数器：</span><input type="text" name="count" value={this.state.count} onChange={e => this.setState({ count: e.target.value })}></input>
        </div>
        <div className="itemInput">
          <span>用户名：</span><input type="text" name="usename" value={this.state.usename} onChange={this.handleFrom}></input>
        </div>
        <div className="itemInput">
          <span>密码：</span><input type="text" name="password" value={this.state.password} onChange={this.handleFrom}></input>
        </div>
        {/* 非受控组件 */}
        <div className="itemInput">
          <span>非受控组件</span><input type="text" ref={this.txtRef}></input><span>{this.state.txtRefValue}</span>
        </div>

        <div className="btnbox">
          <Button style={{ width: '100px' }} className="btn" type="primary" onClick={() => { this.setState({ txtRefValue: this.txtRef.current.value }) }}>非受控组件</Button>
        </div>

        <h3>计数器： {this.state.count}</h3>
        <h3>用户名： {this.state.usename}</h3>
        <h3>密码： {this.state.password}</h3>
        <h3>修改001内容</h3>



      </div>
    )
  }
}


export default homepage 