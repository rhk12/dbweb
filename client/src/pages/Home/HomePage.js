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
    this.setState({currentPage: number});
    if(number === 1){
        $(".header").removeClass("activehead");
        $(".anima").removeClass("underline-from-center");
    } else {
        $(".header").addClass("activehead");
        setTimeout(function () {
          $(".anima").addClass("underline-from-center");
      }, 1000);
        

    }
    this.setState({currentPage: number});
    if(number === 4){
      // $(".footer_section").addClass("footerActive");
    } else {
      $(".footer_section").removeClass("footerActive");

    }
  };
  scrollUnavailable = (eventKey) => {
    $(".footer_section").addClass("footerActive");
};

  render() {
      return <Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange} scrollUnavailable={this.scrollUnavailable}>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent  goToPage={this.goToPage}/>
          </ReactPageScroller>
      </Fragment>
  }
}