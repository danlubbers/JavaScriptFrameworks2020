import React, { useState } from "react";
import axios from "axios";

/**
 * Handles logging in, logging out, and storing the authentication token.
 * @param {Object} props children will contain the content that can only be seen if the user has logged in.
 * @example
 * {
 *    children: <LoggedInContent />
 * }
 */
function LoginHandler(props) {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * When a user is logged in, a token is stored in local storage and "isLoggedIn" is true.
   * `localStorage.getItem("token")` is equal to the token
   * `!!localStorage.getItem("token")` casts the starting value as a boolean, forcing "isLoggedIn" to be either true or false.
   */
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const login = token => {
    /**
     * When the user refreshed the page or closes the tab, the logged in state is lost. They will have to login again.
     * To prevents this, I am storing the token in local storage, which will still be there when the user refreshes or reopens the application.
     */
    localStorage.setItem("token", token);
    /**
     * Setting in state so that I can force this component to rerender and show the logged in user content.
     */
    setIsLoggedIn(true);
    /**
     * Clearing everything else, so if the user logout, it won't be prepopulated.
     */
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };
  /**
   * Logs a user out by deleting the token in local storage and setting the "isLoggedIn" to false.
   */
  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleLoginRequest = e => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    axios("http://localhost:7000/token/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username,
        password
      }
    })
      .then(resp => login(resp.data.token))
      .catch(err => {
        console.error(err);
        if (!err.response || !err.response.data || !err.response.data.message)
          setErrorMessage("Oh no! An unexpected error occurred.");
        else setErrorMessage(err.response.data.message);
      })
      .then(() => setIsLoading(false));
  };

  /**
   * Renders the main content, which is <LoggedInContent /> being passed down from props.
   */
  if (isLoggedIn) {
    /**
     * I am wanting to return "props.children", but React won't let me because "props.children" is an object, and React won't let me return an object.
     * I get the error "Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object."
     * Using "cloneElement" from React to get around this.
     * @see https://reactjs.org/docs/react-api.html#cloneelement
     * I'm also passing the logout function down as props.
     */
    return React.cloneElement(props.children, { logout });
  } else {
    /**
     * If the user hasn't logged in yet, this renders a login form.
     */
    return (
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
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
    );
  }
}

export default LoginHandler;
