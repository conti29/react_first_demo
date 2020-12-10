import React from 'react'
import './publicA.css'
import PropTypes from 'prop-types'


class publicA extends React.Component {
  state = {
  }

  handle = () => {
    this.props.getChild(this.state.sendToFather)
  }

  render() {
    return (
      <div className="publicA">
        <p>我是publicA: {this.props.name}</p>
        <p>我是publicA: {this.props.list}</p>
        <p>我是高阶组件: {this.props.x}----{this.props.y}</p>
      </div>
    )
  }
}

publicA.propTypes = {
  // 约定name属性为array类型
 // 如果类型不对，则报出明确错误，便于分析错误原因
  name: PropTypes.string,
  list: PropTypes.array,
 }

 publicA.defaultProps = {
   name: '王大锤'
 }




export default publicA 