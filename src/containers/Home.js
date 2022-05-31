import React, { Component } from "react";
import './../../src/Home.css';
import NewsLetterForm from "./NewsLetterForm";
class Home extends Component {
  state = {};
  render(){
    return (
      <div>
        <div className="main-body">
          <div className="bg"></div>
          <div className="content-body">
            <div className="content center">
              <h1 className="title">Healthy<br></br>Living</h1>
              <h3 className="sub-title">The foundational guide to balancing your nutritional diets and everyday lifestyle</h3>
              <div className="know-more-button">
               <p className="know-more-text">
                 <a href="/contact" style={{textDecoration:"none",color:"black"}}>KNOW MORE</a></p>
             </div>  
            </div>
          </div>
        </div>
        <NewsLetterForm />
      </div>
        
    );
  }
}

export default Home;
