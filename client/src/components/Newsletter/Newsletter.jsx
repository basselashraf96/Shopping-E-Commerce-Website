import "./Newsletter.css";
import SendIcon from "@mui/icons-material/Send";
const Newsletter = () => {
  return (
    <div id="newsletter-container">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className="newsletter-input">
        <input type="email" placeholder="Your email" />
        <div className="submit-icon">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
