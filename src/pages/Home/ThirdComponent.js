import React from "react";

export default () => {
  return (
    <div className="component third-component">
      <section className="container">
        <div className="what">
          <h1>WHAT WE DO</h1>
          <div className="cardsec">
            <div className="leftCard">
              <img src="/img/icon/Grouparmy.png" alt="" />
              <div className="text">
                <h4>FOR SOLDIERS</h4>
                <p>
                  We use sensor-enabled, cloud-based platform for individualized
                  brain modeling of Soldiers…. <a>Read more</a>
                </p>
              </div>
            </div>
            <div className="rightCard">
              <img src="/img/icon/Groupgame.png" alt="" />
              <div className="text">
                <h4>FOR ATHLETES</h4>
                <p>
                  We utilize data from the customized computer models to
                  approximate an Athlete’s brain’s response to injuries.
                  <a>…Read more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
