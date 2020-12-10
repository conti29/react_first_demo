import React from 'react'
// import './publicA.css'
import PropTypes from 'prop-types'


class mouse extends React.Component {
  state = {
    x: 'aaa',
    y: 'bbb',
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return this.props.children(this.state)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
}

mouse.propTypes = {
  children: PropTypes.func.isRequired
}








export default mouse 