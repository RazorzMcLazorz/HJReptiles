import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'

class NavBar extends Component {

  componentDidMount() {
  }

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
      <div className="navBar">
          <div>
            Call us
          </div>
          <div>
            Logo
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
NavBar = connect(mapStateToProps, actions)(NavBar);
export default NavBar;