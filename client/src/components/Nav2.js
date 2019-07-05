import React from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


import "./Nav2.css";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
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
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
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
                    <MDBNavLink to="#">CONTRACT US</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
