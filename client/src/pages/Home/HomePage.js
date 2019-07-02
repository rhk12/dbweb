import React, { Fragment } from "react";
import ReactPageScroller from "react-page-scroller";

import "./HomePage.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";

export default class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {currentPage: 1};
      this._pageScroller = null;
  }
  goToPage = (eventKey) => {
      this._pageScroller.goToPage(eventKey);
  };
  pageOnChange = (number) => {
      this.setState({currentPage: number});
  };


  lastSlide = (e) => {
    console.log("last ==========", e);
    console.log("this.state.currentPage", this.state.currentPage);
};


  render() {
      return <Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange} scrollUnavailable={this.lastSlide}>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent  goToPage={this.goToPage} />
          </ReactPageScroller>
      </Fragment>
  }
}