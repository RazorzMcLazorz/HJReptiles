import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/Footer'
import NavBar from './parts/NavBar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

class App extends Component {

  state={
    loading: true,
    images: [
      'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500',
      'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500',
      'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500',
      'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500'
    ]
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {this.state.loading &&
            <CircularProgress />}
          <Paper style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
            {this.state.images.map((pic, num) =>
              <Card key={num} style={{ display: 'flex', width:'100%', height: 500, flexDirection: num % 2 ? 'row-reverse' : 'row'}}>
                <img style={{width: 800}} src={pic}/>
              </Card>
            )}
          </Paper>
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