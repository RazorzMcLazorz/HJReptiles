import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/Footer'
import NavBar from './parts/NavBar'

class Login extends Component {

  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='login'>
        <NavBar />
            
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Login = connect(mapStateToProps, actions)(Login);
export default Login;