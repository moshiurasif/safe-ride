import React, { useContext, useState } from 'react';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig);
// if(firebase.app.length === 0){
//     firebase.initializeApp(firebaseConfig)
// }

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [createUser, setCreateUser] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    success: false
  });
  console.log(user);

  const handleOnBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const isPasswordHasValid = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && isPasswordHasValid;
    }
    if (isFormValid) {
      const UserAdd = { ...user };
      UserAdd[e.target.name] = e.target.value;
      setUser(UserAdd);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (createUser && user.email && user.password) {
      alert("are you sure");
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorWroning = { ...user };
          errorWroning.error = "";
          errorWroning.success = true;
          setUser(errorWroning);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorWroning = { ...user };
          errorWroning.error = error.message;
          errorWroning.success = false;
          setUser(errorWroning);
        });
    }
    if (!createUser && user.email && user.password) {
      alert("Are you sure?");
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorWarning = { ...user };
          errorWarning.error = "";
          errorWarning.success = true;
          setUser(errorWarning);
          setLoggedInUser(errorWarning);
          history.replace(from);
        })

        .catch((error) => {
          const errorWroning = { ...user };
          errorWroning.error = error.message;
          errorWroning.success = false;
          setUser(errorWroning);
        });
    }
  };
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;

        const userInfo = result.user;
        const newUser = { ...user };
        console.log("successful", userInfo);
        newUser.name = userInfo.displayName;
        newUser.email = userInfo.email;
        newUser.isValidUser = true;
        setUser(newUser);
        setSuccess("You are Successfully LoggedIn");
        setError("");
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        setSuccess("");
        setError(errorMessage);
      });
    // event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="create-new-user">
            <input
              type="checkbox"
              onChange={() => setCreateUser(!createUser)}
              name="NewUser"
            />
            <label htmlFor="NewUser">New User Sign Up</label>
          </div>
          <div className="login-form-style">
            <form onSubmit={handleSubmit}>
              {createUser && (
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Your Name"
                  required
                />
              )}
              <input
                className="form-control"
                type="text"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Your Email"
                required
              />
              <input
                className="form-control"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Your Password"
                required
              />
              <input
                className="submit-controll"
                type="submit"
                value={createUser ? "Sign up" : "Sign in"}
              />
            </form>
            <p style={{ color: "red" }}>{user.error}</p>
            {user.success && (
              <p style={{ color: "green" }}>
                user {createUser ? "created" : "Logged In Successfully"}
              </p>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="login-form-style">
            <button onClick={handleGoogleLogin} className="login-button">
              <span>
                <img
                  className="text-left"
                  width="20"
                  src="https://i.ibb.co/TgdQSf5/Group-573.png"
                  alt="Group-573"
                  border="0"
                />
              </span>
              continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;