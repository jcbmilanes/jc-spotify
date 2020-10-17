import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  /*
  const [token, setToken] = useState(null);
  */

  // to pull information, this is the sysntax that we need to remember.
  const [{user, token}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token)
    {
      /*
      setToken(_token);
      */

      spotify.setAccessToken(_token);
    
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMe().then(user => {
        //console.log("user >>>", user);

        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });
    }

    /*console.log('I HAVE A TOKEN >>>', token);*/

  }, []);

  // to test if the user and token are being actually stored in the data layer.
  console.log("user pulled from the data layer >>>", user);
  console.log("token pulled from the data layer >>>", token);

  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
