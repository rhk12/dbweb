import React, { Fragment } from "react";
import { MDBRow,MDBCol} from 'mdbreact';
import "./HomePage.css";

const HomePage = () => (
  <div>
		{/* start banner section----- */}
		<div className="bannerArea">
            <MDBRow className ="bsub">
              <MDBCol size="7"><img className="banrimage" src="/img/banner/Group 838.png" alt=""/></MDBCol>
              <MDBCol size="5" className="bannerText">
                <div className="subtext">
                  <div className="hd">Digital Brain Technologies </div>
                  <div className="sub"><p>We provide a sensor-enabled cloud based platform for monitoring brain health. </p></div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
					<section>
						<div className="understand">
							<h1>UNDERSTAND YOUR BRAIN</h1>
							<div className="dbt_heading_para"><p>Digital Brain Technologies develops premier computational brain modeling software and provides services for neural analytics. Innovative sensor and neurotechnology companies use our API to dramatically improve concussion diagnostics, monitor the brain response over decade long time periods, track the initiation and progression of neurodegenerative disease, interpret EEG signals and provide an overall digital picture of your brain.</p></div>
							<div className="dbt_image">
								<div className="dbt_image_chain">
								<img  src="/img/icon/Cloud_white.png" alt=""/>
								<p className="text">SENSOR ENABLED CLOUD-BASED BRAIN MODELING</p>
								</div>
								<div className="dbt_image_chain">
								<img  src="/img/icon/Analysis_White.png" alt=""/>
								<p className="text">MONITOR AND TRACK BRAIN RESPONSE OVER TIME</p>
								</div>
								<div className="dbt_image_chain">
								<img  src="/img/icon/Moniter_white.png" alt=""/>
								<p className="text">MONITOR AND TRACK BRAIN RESPONSE OVER TIME</p>
								</div>
							</div>
						</div>
					</section>
					<section>
						<div className="what">
						<h1>WHAT WE DO</h1>
						<div className="cardsec">
							<div className="leftCard">
							<img  src="/img/icon/Grouparmy.png" alt=""/>
							<div className="text">
									<h4 >FOR SOLDIERS</h4>
									<p>We use sensor-enabled, cloud-based platform for individualized brain modeling of Soldiers…. <a>Read more</a></p>
								</div>
							</div>
							<div className="rightCard">
							<img  src="/img/icon/Groupgame.png" alt=""/>
								<div className="text">
									<h4 >FOR ATHLETES</h4>
									<p>We utilize data from the customized computer models to approximate an Athlete’s brain’s response to injuries.<a>…Read more</a></p>
								</div>
							</div>
						</div>
						</div>
					</section>
	</div>
);

export default HomePage;
