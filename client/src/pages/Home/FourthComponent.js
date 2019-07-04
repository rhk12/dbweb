import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Tabs, Tab } from "react-bootstrap-tabs";

export default () => {
  return (
    <div className="component fourth-component" style={{marginBottom: '150px'}}>
      <section className="container">
        <div className="technologies">
          <h1>TECHNOLOGIES WE USE</h1>
          <div className="tabsection">
          <MDBRow>
            <MDBCol size="4" className="leftDiv">
            <div className="imagetag">
            <img src={require('./../../img/001-medical-history.svg')}/>
            </div>
            <div className="text">
              <h4>
              Wireless Wearable Sensors
              </h4>
              <p>We partner with leading impact and blast sensor companies to provide real-time brain response analytics. We help transform their data into meaningful brain health monitoring.  Looking for a sensor? See our recommended providers here. </p>
            </div>
            </MDBCol>
            <MDBCol size="4">
            <div className="textsection">
            <div className="imagetag">
            <img src={require('./../../img/iot-sensor-icon-8.png')}/>
            </div>
            </div>
            </MDBCol>
            <MDBCol size="4" className="rightDiv">
            <div className="imagetag">
            <img src={require('./../../img/Group 2669.svg')}/>
            </div>
            <div className="text">
              <h4>
              Computational Brain<br/> Medicine
              </h4>
              <p>Computational Brain Medicine (CBM) is a transformative and emerging discipline that uses computers to understand, diagnose, develop treatment options, and monitor brain health. It leverages engineering, mathematics and computational science to develop quantitative approaches for brain health applications.</p>
            </div>
            </MDBCol>
            <div className="read_Bnt">
              <button>Read More</button>
            </div>
          </MDBRow>
           </div>
        </div>
      </section>
    </div>
  );
};
