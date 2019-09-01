import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/actions'
import { Link } from 'react-router-dom'

class Footer extends Component {

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
      <div className="footer">
        Footer
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
Footer = connect(mapStateToProps, actions)(Footer);
export default Footer;