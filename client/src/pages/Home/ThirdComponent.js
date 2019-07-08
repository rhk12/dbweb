import React from "react";

export default () => {
  return (
    <div className="component third-component">
      <section className="container">
        <div className="what">
          <h1 className="anima">WHAT WE DO</h1>
          <div className="cardsec">
            <div className="leftCard">
              <img src="/img/icon/Group-2491.png" alt="" />
              <div className="text">
                <h4>FOR SOLDIERS</h4>
                <p>
                Using data from blast gauges and impact sensors we simulate every single head insult a Soldier experiences. We help transform operational blast exposure data into decisions.
                </p>
              </div>
            </div>
            <div className="rightCard">
              <img src="/img/icon/Group-2494.png" alt="" />
              <div className="text">
                <h4>FOR ATHLETES</h4>
                <p>
                Sports head impact sensors are now becoming mainstream. We use the data collected from the sensors as input into athlete-specific models to monitor the brain's response to impact. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
