import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
//import Nav from "./components/Nav";
import FullPageIntroWithFixedTransparentNavbar from "./components/Nav2";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home/HomePage";

import "./index.css";

// MDReact css
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => (
  <div>
 		<FullPageIntroWithFixedTransparentNavbar />
    <div className="container bg">
      <Route exact={true} path="/" component={Home} />
    </div>
		<Footer />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
