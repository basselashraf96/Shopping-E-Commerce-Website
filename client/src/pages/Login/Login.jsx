import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./Login.css";

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="register-container login-container">
      <div className="register-form login-form">
        <h1>SIGN IN</h1>
        <div className="register-inputs ">
          <input
            className="login-input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>Forgot password? CREATE NEW ACCOUNT</p>
        <Button onClick={handleClick} disabled={isFetching}>
          LOGIN
        </Button>
        {error && <Error>Something went wrong ...</Error>}
      </div>
    </div>
  );
};

export default Login;
