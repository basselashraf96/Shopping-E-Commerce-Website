import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h1>CREATE AN ACCOUNT</h1>
        <div className="register-inputs">
          <input placeholder="name" />
          <input placeholder="last name" />
          <input placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
        </div>
        <p>
          By creating an account i consent to the processing of my personal data
          in accordance with the <strong>PRIVACY POLICY</strong>.
        </p>
        <button>Create</button>
      </div>
    </div>
  );
};
export default Register;
