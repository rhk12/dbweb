import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <footer style={{position: 'fixed', bottom: 0, left:0, right:0, zIndex: -999}}>
      <div>
        <MDBRow className="foottop">
          <MDBCol size="6">
            <h6>Follow Us:</h6>
          </MDBCol>
          <MDBCol size="6" className="rightAling">
          <h6> Newsletter Subscribe:</h6>
          </MDBCol>
        </MDBRow>
      </div>
      <div>
      <MDBRow className="footbottom">
          <div className="text">Digital Brain Technologies, LLC. © 2019 All right reserved.</div>
        </MDBRow>
      </div>
    </footer>
  );
}

export default Footer;
