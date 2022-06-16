import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small pt-4" >
        <div className="container-fluid text-center text-md-left ">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Nutrition App</h5>
              <p>Perfect place to keep track of your weight.</p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              {/* <h5 className="text-uppercase">Links</h5> */}

              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              {/* <h5 className="text-uppercase">Links</h5> */}

              <ul className="list-unstyled">
                <li>
                  <Link to="/nutritionPlan">Nutrition Plans</Link>
                </li>
                <li>
                  <Link to="/weightLogs">Weight Logs</Link>
                </li>
                <li>
                  <Link to="/dietPlan">Diet Plans</Link>
                </li>
                <li>
                  <Link to="/payments">Payments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/"> Nutrition App</a>
        </div>
      </footer>
    </div>
   
  );
}

export default Footer;
