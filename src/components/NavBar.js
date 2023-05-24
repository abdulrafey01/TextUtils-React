import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar(props) {

  const dotStyle = {
    height: "25px",
    width: "25px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a  className="navbar-brand" href="#">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
            </li>
            {/* <li className="nav-item">
              <a  className="nav-a active" aria-current="page"  href="#" >{props.aboutText}</a>
            </li> */}
          </ul>
          <div>
            <span class="dot mx-1" style={dotStyle}></span>
            <span class="dot mx-1" style={dotStyle}></span>
            <span class="dot mx-1" style={dotStyle}></span>
            <span class="dot mx-1" style={dotStyle}></span>
            </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{ color: props.mode == 'light' ? 'black' : 'white' }} htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode == 'light' ? 'dark' : 'light'} mode`}</label>
          </div>
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