import React, { Fragment } from "react";
import { MDBRow,MDBCol} from 'mdbreact';
import {Tabs, Tab} from 'react-bootstrap-tabs';
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
					<section>
						<div className="technologies">
						<h1>TECHNOLOGIES WE USE</h1>
						<div className="tabsection">
						<Tabs onSelect={(index, label) => console.log(label + ' selected')}>
							<Tab label="Computational Medicine" className="tab1">
							<MDBRow>
              <MDBCol size="7">
							<div className="cont">
								<div className="head">
								<div className="image"><img  src="/img/icon/001-laptop.png" alt=""/></div>
								<div className="hd"><h4>Computational Brain Medicine</h4></div>
								</div>
								<div className="b_chain_para">Computational Brain Medicine (CBM) is a transformative and emerging discipline that uses computers to understand, diagnose, develop treatment options, and monitor brain health. It leverages engineering, mathematics and computational science to develop quantitative approaches for brain health applications.</div>
							</div>
							</MDBCol>
              <MDBCol size="5" className="bannerText">
							<div className="barimg">
							<img  src="/img/icon/Group-2426.png" alt=""/>
							</div>
              </MDBCol>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/Group-2477.png" alt=""/>
							</div>
							<div className="dbt_heading">Why Computational Medicine for Digital Brain Technologies?</div>
							
							</div>
							<div class="dbtTab">
								<p>Computational medicine is one of the fastest growing methods of using computer models and sophisticated software to figure out how a disease develops and how to prevent it.</p>
								<p>Digital Brain Technologies is leading the revolution in computational brain medicine.</p>
								<ul class="dtb_tab_list">
								<li>Digital Brain Technologies uses customized computer models of an individual’s brain to quantify loading effects to the brain and monitor cumulative insults over time. Individualized brain modeling offers a path to a comprehensive approach to the detection and monitoring of neurotrauma.</li>
								<li>Computational medicine offers a “virtual” MRI of how external forces translate to cellular damage. Currently, there is no other technology to give near real-time analysis of head acceleration events.</li>
								<li>A well-built computational platform can “remember” past events, such as subconcussive impacts, that can be used to predict future brain damage.</li>
								<li>A computer model can be paired with technology that measures cognitive and physiological changes so the individuals’ injury – function relationship can be estimated and used for assessing return-to-duty, or return-to-learn.</li>
								<li>Computational physiological medicine uses computer models to assess how biological systems turn from a healthy to an unhealthy situation. This approach helps in developing better treatments for brain-related diseases.</li>
								<li>Computational anatomy through medical images allows seeing changes, for instance, in the shape of a brain’s various structures.</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/002-reward.png" alt=""/>
							</div>
							<div className="dbt_heading">Advantages of Computational Medicine</div>
							
							</div>
							<div class="dbtTab">
								<ul class="dtb_tab_list">
								<li>A completely modern perspective to medical diagnosis and treatment</li>
								<li>A transparent view of disease causes and how to treat it</li>
								<li>Understand disease mechanisms</li>
								<li>Aid in diagnosis</li>
								<li>Test the effectiveness of different therapies</li>
								<li>Test potential therapies “in silico” at high speed</li>
								<li>Detect and treat diseases at the level of the individual</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/001-medical-history.png" alt=""/>
							</div>
							<div className="dbt_heading">Compliance</div>
							
							</div>
							<div class="dbtTab">
								<p>Computational medicine or personalized medicine follows strict guidance from the following authorities:</p>
								<ul class="dtb_tab_list">
								<li>Food and Drug Administration (FDA)</li>
								<li>World Health Organization (WHO)</li>
								<li>The American Society of Clinical Oncology (ASCO)</li>
								<li>Centers for Medicare and Medicaid Services (CMS)</li>
								</ul>
							</div>
							</div>
            </MDBRow>
							
							</Tab>
							<Tab label="Blockchain" className="tab1">
							<MDBRow>
              <MDBCol size="7">
							<div className="cont">
								<div className="head">
								<div className="image"><img  src="/img/icon/blockchain-1.png" alt=""/></div>
								<div className="hd"><h4>Blockchain</h4></div>
								</div>
								<div className="b_chain_para">Blockchain is a distributed and unchangeable (write once and read-only) record of digital events that are shared peer-to-peer between different parties (networked database systems). Its data integrity and networked immutability are the core strength of Digital Brain Technologies cyber-ecosystem for computational brain medicine.</div>
							</div>
							</MDBCol>
              <MDBCol size="5" className="bannerText">
							<div className="barimg">
							<img  src="/img/icon/Group-2497.png" alt=""/>
							</div>
              </MDBCol>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/Group-2477.png" alt=""/>
							</div>
							<div className="dbt_heading">Why Blockchain for Digital Brain Technologies?</div>
							
							</div>
							<div class="dbtTab">
								<p>
								Users of the Digital Brain Technologies Platform can easily receive and send records to anyone they want without worrying about data corruption or tampering, as Blockchain is immutable and distributed. This is critical because we treat your data as a medical health record that needs the highest degree of security and ownership permissions. Digital Brain Technologies could receive data from sensor companies measuring head acceleration events that call the DBT API, or medical personnel for which you desire to share your data with. As a user, you can oversee how the medical institutions are using your medical data. You can specifically authorize any individual to access your medical information, or not.
								</p>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/002-reward.png" alt=""/>
							</div>
							<div className="dbt_heading">Advantages of Blockchain</div>
							
							</div>
							<div class="dbtTab">
								<ul class="dtb_tab_list">
								<li>Improved Control over Population Health Data</li>
								<li>Increased Data Security of Electronic Medical Records (EMR)</li>
								<li>Health Data Interoperability</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/001-medical-history.png" alt=""/>
							</div>
							<div className="dbt_heading">Compliance</div>
							
							</div>
							<div class="dbtTab">
								<p>
								The Digital Brain Technologies Platform is designed to work as a healthcare solution for monitoring and tracking brain health over decades of time. It is completely HIPAA (US) & GDPR (Europe) compliant. As Blockchain as its underlying technology, the Digital Brain Technologies Platform accurately abides by the privacy and regulatory compliance of patients’ medical records. Currently, our team is working with the FDA to ensure our Platform is FDA regulated and compliant.
								</p>
							</div>
							</div>
            </MDBRow>
							</Tab>
							<Tab label="Springboot" className="tab1">
							<MDBRow>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/java.png" alt=""/>
							</div>
							<div className="dbt_heading java">Java with Spring Boot</div>
							
							</div>
							<div class="dbtTab">
								<p>Spring Boot, built on the top of the Spring framework, provides a simpler and faster way to set up, configure, and run stand-alone, production-grade Java applications. There are multiple reasons why Spring Boot (and Java) was chosen to build the Digital Brain Technologies Platform as described below.</p>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/Group-2477.png" alt=""/>
							</div>
							<div className="dbt_heading">Why Java for Digital Brain Technologies?</div>
							
							</div>
							<div class="dbtTab">
								<p>Java is an easily scalable programming language for web app development. We can write once and then use the code anywhere for enabling cross-platform portability.</p>
								<p>Java uses memory management that helps in managing the effectiveness and speed of the web application.</p>
								<p>Also, it provides multi-threading for fewer glitches, fast response time, multiple operations, and better performance. This is critical for the Digital Brain Technologies Platform because there are many different types of services and data we take advantage of to provide the user an accurate up-to-date prediction of their brain health. Source of input include sensor data, medical imaging or measurements. This information is used to connect with high-performance computing on the backend using Amazon’s E2C resources. A distributed parallel finite element simulation is executed using Digital Brain Technologies BrainSimTM software. The results from the simulation are processed and provided back to the user in various output formats.</p>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/002-reward.png" alt=""/>
							</div>
							<div className="dbt_heading">Advantages of Java</div>
							
							</div>
							<div class="dbtTab">
								<ul class="dtb_tab_list">
								<li>Higher Cross-Functionality and Portability</li>
								<li>Distributed and Object-oriented</li>
								<li>Supports Multithreading</li>
								<li>Offers Multimedia and Network Support</li>
								</ul>
							</div>
							</div>

							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/001-medical-history.png" alt=""/>
							</div>
							<div className="dbt_heading">Compliance</div>
							
							</div>
							<div class="dbtTab">
							<p>According to the Open Web Application Security Project (OWASP), several critical security risks need to be taken into consideration for the development of an app. Java uses several security frameworks to secure the development process of an application. These include:</p>
<p><b>JAAS:</b> A security API consisting of a set of Java packages created for user authorization and authentication.</p>
<p><b>Spring Security:</b> A highly customizable framework that deals with access control (authorization) and authentication issues in enterprise apps coded in Java.</p>
<p><b>OACC:</b> An application security framework for Java, designed for fine-grained (object level) access control.</p>
							</div>
							</div>
            </MDBRow>
							</Tab>
							<Tab label="Microservice architecture" className="tab1">
							<MDBRow>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/noun_Microservices_225283-1.png" alt=""/>
							</div>
							<div className="dbt_heading java">Microservice Architecture</div>
							
							</div>
							<div class="dbtTab">
								<p>Spring Boot, built on the top of the Spring framework, provides a simpler and faster way to set up, configure, and run stand-alone, production-grade Java applications. There are multiple reasons why Spring Boot (and Java) was chosen to build the Digital Brain Technologies Platform as described below.</p>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/Group-2477.png" alt=""/>
							</div>
							<div className="dbt_heading">Why Microservices for Digital Brain Technologies?</div>
							
							</div>
							<div class="dbtTab">
								<p>A microservice architecture, or simply microservices, can be considered as the modified concept of service-oriented architecture (SOA).Choosing a microservice architecture to develop the Digital Brain Technologies Platform is a natural choice as we need a multifunctional software system that can integrate with a wide variety of platforms and devices (including mobile, web, IoT-enabled sensors, wearables, etc.).</p>
								<p>Many giant companies like Netflix, Amazon, eBay, Twitter, etc., – have shifted to microservices architectures, to enhance their performance and better response to the market calls.
								</p>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/002-reward.png" alt=""/>
							</div>
							<div className="dbt_heading">Advantages of using Microservice Architecture</div>
							
							</div>
							<div class="dbtTab">
								<ul class="dtb_tab_list">
								<li>Independent and Flexible Scalability</li>
								<li>Self-supporting Tech Stack</li>
								<li>Advanced Fault Isolation</li>
								<li>Easy Deployment and Integration</li>
								<li>Easily Understandable</li>
								<li>Faster Distribution of Important Security Patches</li>
								<li>Smaller Attack Surfaces</li>
								<li>Functionality Shielding</li>
								</ul>
							</div>
							</div>

							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/001-medical-history.png" alt=""/>
							</div>
							<div className="dbt_heading">Compliance</div>
							
							</div>
							<div class="dbtTab">
							<p>Although microservices are highly complex and dynamic in nature, they meet several compliance challenges by:</p>
							<ul class="dtb_tab_list">
									<li>Understanding Serverless Security Perils</li>
									<li>Return-Oriented Programming</li>
									<li>Alleviating Data Injection Risks</li>
							</ul>
</div>
							</div>
            </MDBRow>
							</Tab>
							<Tab label="AI" className="tab1">
							<MDBRow>
              <MDBCol size="7">
							<div className="cont">
								<div className="head">
								<div className="image"><img  src="/img/icon/blockchain-1.png" alt=""/></div>
								<div className="hd"><h4>Artificial Intelligence</h4></div>
								</div>
								<div className="b_chain_para">Digital Brain Technologies uses Artificial intelligence (AI) to improve our ability to accurately approximate outcomes without direct human input. Machine Learning (ML), Neural Networks, Deep Learning, Cognitive Computing are subfields of AI. Altogether, they provide a bold way to improve our predictive capabilities.</div>
							</div>
							</MDBCol>
              <MDBCol size="5" className="bannerText">
							<div className="barimg">
							<img  src="/img/icon/Group-1756.png" alt=""/>
							</div>
              </MDBCol>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/Group-2477.png" alt=""/>
							</div>
							<div className="dbt_heading">Why use AI and ML within the Digital Brain Technologies Platform?</div>
							
							</div>
							<div class="dbtTab">
								<p>
								With millions of data points from sensors, each one with a corresponding brain simulation, AI offers some tools to predict trends in brain health over time. For example, using AI, DBT could identify that one particular position is more dangerous than others. AI would be able to use all the previous data collected to create improved predictive capabilities in the future. following benefits for the Digital Brain Technologies Platform.
								</p>
								<ul class="dtb_tab_list">
								<li>Improved Control over Population Health Data</li>
								<li>Increased Data Security of Electronic Medical Records (EMR)</li>
								<li>Health Data Interoperability</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/002-robot.png" alt=""/>
							</div>
							<div className="dbt_heading">We do that by:</div>
							</div>

							<div class="dbtTab">
							<p>With millions of data points from sensors, each one with a corresponding brain simulation, AI offers some tools to predict trends in brain health over time. For example, using AI, DBT could identify that one particular position is more dangerous than others. AI would be able to use all the previous data collected to create improved predictive capabilities in the future. following benefits for the Digital Brain Technologies Platform.</p>
								<ul class="dtb_tab_list">
								<li>Incorporating Cognitive Technology into Risk Assessments</li>
								<li>Monitoring Regulatory and Legal Developments</li>
								<li>Conducting Analyses in HIPAA-protected Application Environments</li>
								<li>Engaging counsel to ensure appropriate addressing of contractual arrangements with sources of the data.</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/001-medical-history.png" alt=""/>
							</div>
							<div className="dbt_heading">Compliance</div>
							
							</div>
							<div class="dbtTab">
								<p>Cognitive resources like AI and ML are all set to turn science fiction into healthcare revolutions.</p>
								<p>At Digital Brain Technologies, we are building cognitive technology into software and considering new risks to health data while being compliant with regulatory and compliance obligations like HIPAA’s ‘protected health information’ or ‘PHI.’</p>
							  <p>Also, approvals from the FDA before the implementation of an AI device or application in healthcare is a must. We are actively working with the FDA to ensure regulatory compliance.</p>
							</div>
							</div>
            </MDBRow>
							</Tab>
							<Tab label="Analytics" className="tab1">
							<MDBRow>
              <MDBCol size="7">
							<div className="cont">
								<div className="head">
								<div className="image"><img  src="/img/icon/blockchain-1.png" alt=""/></div>
								<div className="hd"><h4>Data Analytics</h4></div>
								</div>
								<div className="b_chain_para">At Digital Brain Technologies, we believe that only through the fusion of multiple data types will brain injury be truly diagnosed and monitored. Furthermore, data will help define individualized treatment plans with improved precision. We leverage Data analytics to inspect, transform, and model data with the aim of identifying valuable information, informing outcomes and strengthening decision-making.</div>
							</div>
							</MDBCol>
              <MDBCol size="5" className="bannerText">
							<div className="barimg">
							<img  src="/img/icon/Group-2432.png" alt=""/>
							</div>
              </MDBCol>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/Group-2477.png" alt=""/>
							</div>
							<div className="dbt_heading">Why Data Analytics in Digital Brain Technologies?</div>
							
							</div>
							<div class="dbtTab">
								<p>Data Analytics can uncover entire demographic groups and enable caregivers like Digital Brain Technologies to make decisions for optimized patient outcomes.</p>
								<ul class="dtb_tab_list">
									<li>Appropriate Recognition of Triggers of Diseases for Immediate Detection</li>
									<li>Social-clinical Care Path</li>
									<li>Evidence-based Medicine</li>
									<li>Patient Profile Analytics.</li>
									<li>Quick Transfer of Data among Healthcare IT Systems</li>
									<li>Improved Accuracy and Quality of Clinical Decisions .</li>
									<li>Process Bulk Health Records in Seconds.</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/002-reward.png" alt=""/>
							</div>
							<div className="dbt_heading">Advantages of Data Analytics</div>
							
							</div>
							<div class="dbtTab">
								<p>Big data analytics in healthcare has a twofold potential. It can not only improve IT effectiveness and efficiency but also bolster the optimization of clinical methods.</p>
								<ul class="dtb_tab_list">
								<li>Real-Time Monitoring and Alerting</li>
								<li>Device/Remote Monitoring</li>
								<li>Unstructured Data Analytical Capability</li>
								<li>Decision Support Capability</li>
								<li>Reduced System Redundancy</li>
								<li>Avoid Unnecessary IT costs</li>
								</ul>
							</div>
							</div>
							<div>
							<div className="cnt">
							<div className="icon">
							<img  src="/img/icon/001-medical-history.png" alt=""/>
							</div>
							<div className="dbt_heading">Compliance</div>
							
							</div>
							<div class="dbtTab">
								<p>It’s crucial that companies implement healthcare data security solutions that satisfy healthcare compliance mandates.</p>
								<p>In the Digital Brain Technologies platform, all sensitive information is kept private regardless of changes in the applications or privacy regulations. The Digital Brain Technologies platform conforms to regulatory compliance of:</p>
								<ul class="dtb_tab_list">
								<li>HIPAA Act Patient Safety</li>
								<li>Quality Improvement Act (PSQIA)</li>
								<li>HITECH Act</li>
								<li>Data Protection Directive</li>
								<li>Data Protection Act (DPA)</li>
								</ul>
							</div>
							</div>
            </MDBRow>

							</Tab>
						</Tabs>
						</div>
						</div>
					</section>
	</div>
);

export default HomePage;
