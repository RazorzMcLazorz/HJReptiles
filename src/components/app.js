import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/Footer'
import NavBar from './parts/NavBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class App extends Component {

  state={
    preview: 1,
    images: [
      'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ]
  }

  previewChange() {
    this.setState({preview: this.state.preview - 1})
  }

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
          <div className='AppBody'>
            <Card>
              <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500'/>
            </Card>
            <div className="AppPreview">
              <i className="fas fa-chevron-left" onClick={() => this.previewChange()}/>
              <div className='PreviewImage'>
                <img src={this.state.images[this.state.preview]} />
              </div>
              <i className="fas fa-chevron-right" onCLick={() => this.setState({preview: this.state.preview + 1})}/>
            </div>
          </div>
        <Footer>
          Footer
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;