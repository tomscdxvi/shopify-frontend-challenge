import React from 'react';
import Axios from 'axios';

const FetchApi = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    
    let API_KEY = "5UKdaKZbVreE3dM58FCM6dBbE7Oxylv0NjtiHKdQ";

    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then((response) =>{
        console.log(response);
    })
}

export default { FetchApi };
