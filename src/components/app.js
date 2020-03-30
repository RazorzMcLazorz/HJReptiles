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
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}))

class App extends Component {

  state={
    loading: true,
    images: [
      {
        img: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500',
        title: 'Image',
        author: '',
        cols: 2
      },
      {
        img: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500',
        title: 'Image',
        author: '',
        cols: 2
      },
      {
        img: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500',
        title: 'Image',
        author: '',
        cols: 2
      },
      {
        img: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500',
        title: 'Image',
        author: '',
        cols: 2
      }
    ]
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  
// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     cols: 2,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */

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
        <div className={useStyles.root}>
          <GridList cellHeight={160} className={useStyles.gridList} cols={3}>
            {this.state.images.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <Footer>
          Footer
        </Footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App)
export default App