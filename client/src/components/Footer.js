import React from 'react';
import {MDBRow } from "mdbreact";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="main">
        <MDBRow className="footer_top">
          <div className="logo">
            <img src="../img/Logo.png"/>
          </div>
          <div className="button_s">
            <button>Get Updates</button>
          </div>
        </MDBRow>
        <MDBRow className="footer_bottom">
          <div className="cot">Contact Us: Info@digitialbraintech.com</div>
          <div className="fb">
            <div className="menu">
              <span className="pd_0">IP</span>
              <span>Privacy Policy</span>
              <span className="br">Careers</span>
            </div>
            <div className="copyry">Copyright &copy; 2019 Digital Brain tech. All Rights Reserved.</div>
          <div className="icon">
            <span><i className="fab fa-facebook-f"></i></span>
            <span><i className="fab fa-twitter"></i></span>
            <span><i className="fab fa-instagram"></i></span>
          </div>
          </div>
        </MDBRow>
      </div>
    </footer>
  );
}

export default Footer;
