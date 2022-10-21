import "./Login.css";

const Login = () => {
  return (
    <div className="register-container login-container">
      <div className="register-form login-form">
        <h1>SIGN IN</h1>
        <div className="register-inputs ">
          <input className="login-input" placeholder="username" />
          <input
            className="login-input"
            type="password"
            placeholder="password"
          />
        </div>
        <p>Forgot password? CREATE NEW ACCOUNT</p>
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
