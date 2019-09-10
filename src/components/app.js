import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/Footer'
import NavBar from './parts/NavBar'

class App extends Component {

  render() {
    return (
      <div className='Main'>
        <NavBar />
            <div id='center'>
              <div id='topRow'>
                <div id='topRowLeft'>
                  <div>
                    Logo
                  </div>
                  <div>
                    Search
                  </div>
                  <div>
                    Shop
                  </div>
                  <div>
                    New Stuff
                  </div>
                  <div>
                    Our Store
                  </div>
                </div>
                <div>
                  <div>
                    Login 
                  </div>
                </div>
              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
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