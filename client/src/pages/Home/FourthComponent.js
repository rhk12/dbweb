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
            <MDBCol size="5">
            <div className="imagetag">
            <img src="/img/icon/Group-2497.png" alt="" />
            </div>
            </MDBCol>
            <MDBCol size="7">
            <div className="textsection">
              <div className="head">
                <img src="/img/icon/blockchain-1.png" alt="" /><span>Blockchain</span>
            </div>
            <div className="para">
              <p>Blockchain is a distributed and unchangeable (write once and read-only) record of digital events that are shared peer-to-peer between different parties (networked database systems). Data integrity and networked immutability are the core strength of its cyber-ecosystem for computational brain medicine.</p>
            </div>
            </div>
            <div className="textsection">
              <div className="head">
                <img src="/img/icon/001-medical-history.png" alt="" /><span className="hd">Compliance</span>
            </div>
            <div className="para">
              <p>The Digital Brain Technologies Platform is designed to work for population health. It is completely HIPAA (US) & GDPR (Europe) compliant. Blockchain being its underlying technology, the Digital Brain Technologies platform accurately abides by the privacy and regulatory compliance of patients’ medical records.</p>
            </div>
            </div>
            </MDBCol>
          </MDBRow>
           </div>
        </div>
      </section>
    </div>
  );
};
