import React from "react";
export default () => {
    return (
        <div className="component first-component">
           <section>
                <div className="bannerArea">
                <div className="bannerText">
                <h4>MONITOR YOUR BRAIN HEALTH</h4>
                <p>Accurate brain simulations to help transform your sensor data into actionable insights about brain trauma.</p>
                </div>
                <div className="downArrow bounce">
                <img src={require('./../../img/down-arrow.png')}/>
                </div>
                </div>
            </section>
        </div>
    )
}
