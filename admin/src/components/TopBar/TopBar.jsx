import "./TopBar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Bassel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNoneOutlinedIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <LanguageOutlinedIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsOutlinedIcon />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
