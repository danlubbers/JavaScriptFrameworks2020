import React, { useState } from "react";
import LoggedInContent from "../LoggedInContent/LoggedInContent";
// You may need to import additional things here
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Be sure to set this when a user tries to login with invalid credentials.
   */
  const [errorMessage, setErrorMessage] = useState();

  /**
   * You may need to add more things to state
   */
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!Cookies.get('token'));

  const login = token => {
    // localStorage.setItem('token', token);
    Cookies.set("token", token, { expires: 1})
    setIsUserLoggedIn(true);
    setIsLoading(false);
  };
  
  const logout = () => {
    Cookies.removeItem('token')
    setIsUserLoggedIn(false);
  };

  const handleLoginRequest = e => {
    e.preventDefault();
    setIsLoading(true);

    axios("http://localhost:7000/cookie/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      data: {
        username, 
        password
      },
    })
      .then(res => login(res.data.uuid))
      .catch(err => setErrorMessage(err.response.data.message))
      // This line allows for the login button be abled again after incorrect login
      .then(res => setIsLoading(false));
  };

  /**
   * If the user is logged in, you should render the <LoggedInContent /> component instead.
   */
  
  return (
    <>
    {isUserLoggedIn 
      ? 
        <LoggedInContent logout={logout}/> 
      : 
        <div className="container mt-2 mb-5">
          <h1>Login</h1>
          <form className="form-inline mb-2" onSubmit={handleLoginRequest}>
            <div className="form-group">
              <label htmlFor="username" className="mr-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control mr-3"
                required={true}
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="mr-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control mr-3"
                required={true}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              Login
            </button>
          </form>
          <p className="form-text">
            <small>
              The username is <em>username</em> and the password is{" "}
              <em>password</em>
            </small>
          </p>
          {isLoading && <p>Loading ...</p>}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      } 
    </>
  );
}

export default App;
