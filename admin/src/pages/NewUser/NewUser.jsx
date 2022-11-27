import { useState } from "react";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useDispatch } from "react-redux";
import "./NewUser.css";
import { addUser } from "../../redux/apiCalls";

const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
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
          const user = { ...inputs, img: downloadURL };
          addUser(user, dispatch);
        });
      }
    );
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Image</label>
          <input
            className="image-firbase"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input
            onChange={handleChange}
            name="fullName"
            type="text"
            placeholder="full name"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="phone number"
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="address"
          />
        </div>
        <button onClick={handleClick} className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
