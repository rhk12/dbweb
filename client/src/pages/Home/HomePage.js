import React, { Fragment } from "react";
import ReactPageScroller from "react-page-scroller";

import "./HomePage.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import $ from "jquery";

export default class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {currentPage: 1};
      this._pageScroller = null;
  }
  goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
      console.log('eventKey',eventKey)
  };
  pageOnChange = (number) => {
    console.log(number);
    
      this.setState({currentPage: number});
      console.log("currentpage", this.state.currentPage)
      if(number === 1){
        $(".header").removeClass("activehead");
      } else {
        $(".header").addClass("activehead");

      }
  };

  render() {
      return <Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange} scrollUnavailable={this.lastSlide} pageOnChange={this.pageOnChange} >
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent  goToPage={this.goToPage} />
          </ReactPageScroller>
      </Fragment>
  }
}