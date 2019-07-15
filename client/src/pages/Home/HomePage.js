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
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }
  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey);
    console.log("eventKey", eventKey);
  };
  pageOnChange = number => {
    this.setState({ currentPage: number });
    if (number === 1) {
      $(".header").removeClass("activehead");
      $(".anima").removeClass("underline-from-center");
      $(".dbt_image").removeClass("dotAnimation");
    } else {
      $(".header").addClass("activehead");
      if (number === 2) {
        setTimeout(() => {
          $(".anima").addClass("underline-from-center");
          this.animateDotLine();
        }, 1000);
        $(".anima1").removeClass("underline-from-center");
      } else if (number === 3) {
        $(".anima").removeClass("underline-from-center");
        $(".anima2").removeClass("underline-from-center");
        setTimeout(() => {
          $(".anima1").addClass("underline-from-center");
          $(".dbt_image").removeClass("dotAnimation");
        }, 1000);
      } else if (number === 4) {
        $(".anima1").removeClass("underline-from-center");
        setTimeout(() => {
          $(".anima2").addClass("underline-from-center");
        }, 1000);
      }
    }
    this.setState({ currentPage: number });
    if (number === 4) {
      // $(".footer_section").addClass("footerActive");
    } else {
      $(".footer_section").removeClass("footerActive");
    }
  };
  scrollUnavailable = eventKey => {
    $(".footer_section").addClass("footerActive");
  };
  animateDotLine = () => {
    setTimeout(() => {
      $(".dbt_image").addClass("dotAnimation");
    }, 500);
  };
  render() {
    if((window.innerWidth <= 480 && window.orientation === 0) || (window.innerWidth <= 750 && window.orientation === 90)){
      return ( <div>
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent goToPage={this.goToPage} />
      </div>
      )
    }else{
      return (
        <Fragment>
          <ReactPageScroller
            ref={c => (this._pageScroller = c)}
            pageOnChange={this.pageOnChange}
            scrollUnavailable={this.scrollUnavailable}
          >
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent goToPage={this.goToPage} />
          </ReactPageScroller>
        </Fragment>
      );
    }
  }
}
