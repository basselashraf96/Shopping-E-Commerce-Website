import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

    if (user !== null) {
      setIsValid(true);
    } else {
      //! Because if its set to false it will be false every time to it will not rerender so increment by 1 to rerender every time the credentials is invalid
      setIsValid((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        history.push("/");
      }
    }
  }, [user, isValid]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;
