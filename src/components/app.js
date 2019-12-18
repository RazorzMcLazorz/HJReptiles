import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/Footer'
import NavBar from './parts/NavBar'

class App extends Component {

  render() {
    return (
      <div className='Main'>
        <NavBar>
          <a>
            Search
          </a>
          <a>
            Shop
          </a>
          <a>
            New Stuff
          </a>
          <a>
            Our Store
          </a>
        </NavBar>
            
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;