import tools from "../../Images/profile.jpg";
import "./Page.css";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <img
        src={tools}
        alt="Tools"
        className="tools"
        width={1000}
        height={500}
      />
    </div>
  );
};

export default LandingPage;
