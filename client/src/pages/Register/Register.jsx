import { useState } from "react";
import "./Register.css";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { register, resetRegister } from "../../redux/apiCalls";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const noAvatarImg =
  "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [isPassword, setIsPassword] = useState(true);
  const registerSuccess = useSelector((state) => state.user.success);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(1);

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,

      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    if (
      inputs.password === inputs.confirmPassword &&
      inputs.password !== undefined
    ) {
      setIsPassword(true);
      if (file) {
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const registerInfo = {
                ...inputs,
                img: downloadURL,
                fullName: `${inputs.firstName} ${inputs.lastName}`,
              };
              register(registerInfo, dispatch);
              if (registerSuccess === false) {
                setIsRegisterSuccess((prev) => prev + 1);
              } else {
                setIsRegisterSuccess(true);
              }
            });
          }
        );
      } else {
        register(
          { ...inputs, fullName: `${inputs.firstName} ${inputs.lastName}` },
          dispatch
        );
        if (registerSuccess === false) {
          setIsRegisterSuccess((prev) => prev + 1);
        } else {
          setIsRegisterSuccess(true);
        }
      }
    } else {
      setIsPassword(false);
    }
    if (registerSuccess === false) {
      setIsRegisterSuccess((prev) => prev + 1);
    } else {
      setIsRegisterSuccess(true);
    }
  };
  useEffect(() => {
    if (registerSuccess === true) {
      resetRegister(dispatch);
      navigate("/");
    }
  }, [registerSuccess, isRegisterSuccess]);

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>CREATE AN ACCOUNT</h1>
        <div className="register-inputs">
          <div className="profilePicContainer">
            {file ? file.name : <img src={noAvatarImg} alt="" />}
          </div>

          <div className="uploadProfilePicContainer">
            <label htmlFor="file">
              Profile Picture{" "}
              <FileUploadIcon className="uploadIcon"></FileUploadIcon>
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>

          <input
            onChange={handleChange}
            name="firstName"
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <input
            onChange={handleChange}
            name="phone"
            type="number"
            placeholder="Phone Number"
          />
          <input
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Address"
          />
        </div>
        {!isPassword && (
          <h4 style={{ color: "red" }}>Passwords doesnt match!</h4>
        )}
        <p>
          By creating an account i consent to the processing of my personal data
          in accordance with the <strong>PRIVACY POLICY</strong>.
        </p>
        <button onClick={handleClick}>Create</button>
      </div>
    </div>
  );
};
export default Register;
