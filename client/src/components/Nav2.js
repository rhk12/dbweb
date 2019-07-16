import React from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from "jquery";

import "./Nav2.css";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }
  handleClick(data) {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
    console.log('this is:', data);
  }
  render()  {
    return (
      <div>
        <header className="header">
          <Router>
            <MDBNavbar color="white" fixed="top" dark expand="md"  scrolling transparent className="rk-custom-navbar">
              <MDBNavbarBrand href="/">
								<img className="fixedimage" src="/img/Logo.png" height="300" alt=""/>
                <img className="scrollimage" src="https://www.digitalbraintech.com/wp-content/uploads/2017/11/Logo-07-1.png" height="300" alt=""/>
              </MDBNavbarBrand>
              <MDBCollapse  navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#">FRAMEWORK</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">DEMO</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">FOR DEVELOPERS</MDBNavLink>
                  </MDBNavItem>
									<MDBNavItem>
                    <MDBNavLink to="#">CONTACT US</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              <div className="menubar">
                <div className="icon_button" onClick={(e) => this.handleClick(true)}>
                  <i className={`fa fa-bars ${this.state.isToggleOn ? "showIcon": ''}`} aria-hidden="true"></i>
                  <i className={`fa fa-times ${!this.state.isToggleOn ? "showIconCross": ''}`}  aria-hidden="true"></i>
                </div>
                <div className={`list ${this.state.isToggleOn ? "show": ''}`}>
                  <ul>
                    <li>FRAMEWORK</li>
                    <li>DEMO</li>
                    <li>FOR DEVELOPERS</li>
                    <li>CONTACT US</li>
                  </ul>
                </div>
              </div>
            </MDBNavbar>
            
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
