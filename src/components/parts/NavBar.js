import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class NavBar extends Component {

  getConnection = async () => {
    try {
      const res = await fetch(`${this.props.link}/`)
      const json = await res.json()
    }catch(err) {
      alert(err);
    }
  }

  render() {
    return(
      <div className={useStyles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={useStyles.title}>
              News
            </Typography>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              {this.props.children}
            </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      // <div className="navBar">
      //     <div className="navbarLeft">
      //       Logo
      //     </div>
      //     <div className="navbarMiddle">
      //       {this.props.children}
      //     </div>
      //     <div className="navbarRight">
      //       Call us
      //     </div>
      // </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
NavBar = connect(mapStateToProps, actions)(NavBar);
export default NavBar;