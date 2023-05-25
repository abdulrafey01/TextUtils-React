import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  const dotStyle = {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    display: "inline-block",
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link to = '/'  className="navbar-brand" href="#">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to = '/' className="nav-link active" aria-current="page" >{props.homeText}</Link>
            </li>
            <li className="nav-item">
              <Link to = '/about'  className="nav-link active" aria-current="page"   >{props.aboutText}</Link>
            </li>
          </ul>
          <div>
            <span className="dot bg-primary mx-1" onClick={()=>props.toggle('primary')} style={dotStyle}></span>
            <span className="dot bg-danger mx-1" onClick={()=>props.toggle('danger')} style={dotStyle}></span>
            <span className="dot bg-warning mx-1" onClick={()=>props.toggle('warning')} style={dotStyle}></span>
            <span className="dot bg-success mx-1" onClick={()=>props.toggle('success')} style={dotStyle}></span>
            <span className="dot bg-light border border-dark mx-1" onClick={()=>props.toggle('light')} style={dotStyle}></span>
            <span className="dot bg-dark border border-light mx-1" onClick={()=>props.toggle('dark')} style={dotStyle}></span>
            </div>
          {/* <div className="form-check form-switch">
            <input className="mx-2 form-check-input" type="checkbox" onClick={()=>props.toggle(null)} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ color: props.mode == 'light' ? 'black' : 'white' }} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode == 'light' ? 'dark' : 'light'} mode`}</label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
}

NavBar.defaultProps = {

  homeText: 'Default HomeText',
  aboutText: "Default AboutText",
}