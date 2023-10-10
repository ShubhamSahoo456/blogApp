import React from "react";
import Topbar from "../../components/Topbar";

const Contact = () => {
  return (
    <>
      <Topbar />
      <div className="contact-content font1 max-width-1 m-auto">
        <div className="max-width-1 m-auto mx-1">
          <h2>Feel Free to Contact Us</h2>
          <div className="contact-form">
            <div className="form-box">
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="form-box">
              <input type="text" placeholder="Enter Your Phone Number" />
            </div>
            <div className="form-box">
              <input type="text" placeholder="Enter Your Email Id" />
            </div>
            <div className="form-box">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="How may we help you?"
              ></textarea>
            </div>
            <div className="form-box">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
