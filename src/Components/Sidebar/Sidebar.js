import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Header from "./Header";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          {/* <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
            padding={2}
          >
            Repair Management System
          </Typography>

          <Button color="info" onClick={navigateToSignin}>
            Logout
          </Button>
          {/* <Button color="info" onClick={navigateToSignup}>
            Signup
          </Button> */}
        </div>

        <nav
          className={
            //sidebar ? "nav-menu active" :
            "nav-menu"
          }
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link> */}
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      {/* <footer>
        <div className="footer"></div>
      </footer> */}
    </>
  );
}

export default Sidebar;
