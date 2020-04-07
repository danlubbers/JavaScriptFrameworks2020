import React,  {useState, useContext} from "react";
import "./App.css";
import axios from 'axios';
import { CookieContext } from "./Context/SessionContext";

function App( {history} ) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [hasError, setHasError] = useState(false);

  const [uuid, setUUID] = useContext(CookieContext)
  // console.log({uuid})

  const handleLogin = async e => {
    e.preventDefault();

    try {
        let res = await axios.post("http://localhost:7000/cookie/login",
        {
          username, 
          password
        }, 
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
        )
        // console.log(res)
        res.data.uuid && 
          setUUID(res.data.uuid);
          history.push('/Cookie/Movies')          


        

    } catch(err) {
      setHasError(true);
      setErrorMessage(err.response.data.message)
      console.error(err.response.data.message)

    }
  }

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form className="form-inline mb-2" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            onChange={e => setUserName(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
      {hasError && 
        <div>
          <p style={{color: 'red'}}>{errorMessage}</p>
        </div>
      }
    </div>
  );
}

export default App;