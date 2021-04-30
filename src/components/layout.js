import React from 'react'
import './base.css'
import Container from './container'
// import Navigation from './navigation'
//new nav
import Nav2 from '../components/navigation2'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
      <Nav2 />
        {children}
        
      </Container>
    )
  }
}

export default Template
