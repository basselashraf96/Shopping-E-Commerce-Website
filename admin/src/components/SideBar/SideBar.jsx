import "./SideBar.css";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
const SideBar = () => {
  const [index, setIndex] = useState(0);
  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link className="link" to="/">
              <li
                onClick={() => handleClick(0)}
                className={`sidebarListitem ${index === 0 ? "active" : null}`}
              >
                <LineStyleOutlinedIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li
              onClick={() => handleClick(1)}
              className={`sidebarListitem ${index === 1 ? "active" : null}`}
            >
              <TimelineOutlinedIcon className="sidebarIcon" />
              Analytics
            </li>
            <li
              onClick={() => handleClick(2)}
              className={`sidebarListitem ${index === 2 ? "active" : null}`}
            >
              <TrendingUpOutlinedIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                onClick={() => handleClick(3)}
                className={`sidebarListitem ${index === 3 ? "active" : null}`}
              >
                <PersonOutlineOutlinedIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                onClick={() => handleClick(12)}
                className={`sidebarListitem ${index === 12 ? "active" : null}`}
              >
                <StorefrontOutlinedIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li
              onClick={() => handleClick(4)}
              className={`sidebarListitem ${index === 4 ? "active" : null}`}
            >
              <AttachMoneyOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li
              onClick={() => handleClick(5)}
              className={`sidebarListitem ${index === 5 ? "active" : null}`}
            >
              <EqualizerOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              onClick={() => handleClick(6)}
              className={`sidebarListitem ${index === 6 ? "active" : null}`}
            >
              <EmailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li
              onClick={() => handleClick(7)}
              className={`sidebarListitem ${index === 7 ? "active" : null}`}
            >
              <DynamicFeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li
              onClick={() => handleClick(8)}
              className={`sidebarListitem ${index === 8 ? "active" : null}`}
            >
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              onClick={() => handleClick(9)}
              className={`sidebarListitem ${index === 9 ? "active" : null}`}
            >
              <WorkOutlineOutlinedIcon className="sidebarIcon" />
              Manage
            </li>
            <li
              onClick={() => handleClick(10)}
              className={`sidebarListitem ${index === 10 ? "active" : null}`}
            >
              <TimelineOutlinedIcon className="sidebarIcon" />
              Analytics
            </li>
            <li
              onClick={() => handleClick(11)}
              className={`sidebarListitem ${index === 11 ? "active" : null}`}
            >
              <ErrorOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
