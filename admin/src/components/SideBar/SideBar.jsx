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
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListitem active">
                <LineStyleOutlinedIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListitem">
              <TimelineOutlinedIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListitem">
              <TrendingUpOutlinedIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListitem ">
                <PersonOutlineOutlinedIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListitem">
                <StorefrontOutlinedIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListitem">
              <AttachMoneyOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListitem">
              <EqualizerOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem ">
              <EmailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListitem">
              <DynamicFeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListitem">
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem ">
              <WorkOutlineOutlinedIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListitem">
              <TimelineOutlinedIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListitem">
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
