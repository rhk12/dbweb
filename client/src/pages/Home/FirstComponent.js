import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
export default () => {
    return (
        <div className="component first-component">
           <section>
                <div className="bannerArea">
                <MDBRow className="bsub">
                    <MDBCol size="7">
                    <img className="banrimage" src="/img/banner/Group 838.png" alt="" />
                    </MDBCol>
                    <MDBCol size="5" className="bannerText">
                    <div className="subtext">
                        <div className="hd">Digital Brain Technologies </div>
                        <div className="sub">
                        <p>
                            We provide a sensor-enabled cloud based platform for monitoring
                            brain health.{" "}
                        </p>
                        </div>
                    </div>
                    </MDBCol>
                </MDBRow>
                </div>
            </section>
        </div>
    )
}