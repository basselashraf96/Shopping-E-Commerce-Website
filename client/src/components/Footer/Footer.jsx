import "./Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer-col">
        <h1>BASSEL</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tempora nostrum porro culpa quam ab quaerat praesentium, odio dicta.
        </p>
        <div className="footer-socials">
          <div className="footer-circle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              alt=""
            />
          </div>
          <div className="footer-circle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              alt=""
            />
          </div>
          <div className="footer-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer-col">
        <h2>Useful Links</h2>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Whishlist</li>
            <li>Cart</li>
            <li>Woman Fashion</li>
            <li>My Account</li>
            <li>Register</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="footer-col">
        <h2>Contacts</h2>
        <div className="footer-contact">
          <LocationOnIcon /> <p>egypt cairo 123 123</p>
        </div>
        <div className="footer-contact">
          <PhoneIcon /> <p>(+20) 123 4567 8888</p>
        </div>
        <div className="footer-contact">
          <EmailOutlinedIcon /> <p>example@gmail.com</p>
        </div>
        <div className="footer-payments">
          <img
            src="https://forum.opencart.com/download/file.php?id=28877"
            alt="payments"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
