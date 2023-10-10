import React from "react";
import Topbar from "../../components/Topbar";
import Status from "../../components/Status";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <Topbar />
      <div className="m-auto max-width-1 my-2">
        <Status />
        <div className="home-article">
          <div className="home-article-img">
            <img src="img/3.png" alt="article" />
          </div>
          <div className="home-article-content font1">
            <NavLink to="/blogpost/:id">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </NavLink>
            <div>Author Name</div>
            <span>07 January | 6 min read</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
