import "./User.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to={"/newUser"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBotton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annaback99</span>
            </div>
            <div className="userShowInfo">
              <CalendarMonthOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1996</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneIphoneOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+1 234 567</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annaback99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">NYC | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annaback99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annaback99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 234 567"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="NYC | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg"
                  alt="image"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
