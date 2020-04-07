import React,  {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { CookieContext } from '../Context/SessionContext';
import { destroySessionCookie } from '../utils/Cookies.util';


export const Movies = ( {history} ) => {

  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [uuid, setUUID] = useContext(CookieContext);

  const logout = () => {
    destroySessionCookie();
    history.push('/');
  }

  useEffect(() => {
    (async () => {
      try {

        let res = await axios.get('http://localhost:7000/cookie/movies', {
          params: { id: uuid }
        })

        setMovies(res.data)
        // console.log(res.data);
        // console.log(Array.isArray(res.data));

      } catch(err) {
        setErrorMessage(err.response.data.message);
        // console.log(err.response.data.message);
        // console.log(errorMessage)
      }
    })();
  }, []);

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 className="h2">You are logged in!</h1>
      <button onClick={logout}>
        LOGOUT!!!
      </button>
      <div>
        {Object.values(movies).map((e, i) => {
          return (
            <div key={`movie-${i}`} style={{width: '100%', marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h1>{e.title}</h1>
              <img src={e.poster} alt={e.title}/>
              <p>{e.releaseDate}</p>
              <p>{e.synopsis}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}