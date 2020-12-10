import React from 'react'

function withMouse (WrappedComponent) {
  class Mouse extends React.Component {
    state = {
      x: '哈哈哈哈',
      y: '嘿嘿嘿嘿',
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

    render () {
      return <WrappedComponent {...this.state} />
    }
  }
}

export default withMouse 

