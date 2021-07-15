import { useState } from 'react';

// ....
import axios from 'axios';

// components
import Video from '../components/Video.js';

// styled
import styled from "styled-components";

const WatchPage = () => {


    const [ videos, setVideos ] = useState([]);

    function getVideos() {
        axios.get('https://api.twitch.tv/helix/games?name=Pokemon', {
        headers: {
            'Authorization': 'Bearer ' + 'n7dgjwch0slx3wpjz014f31hn0a60h',
            'Client-Id': 'p4sxkzlo10rvkbhmf0lhtwdydtxrv5'
        }})
        .then((response) => {
            setVideos(response);
            console.log(response);
        })
      };
    

  
return(
    <StyledWatchPage>
        <h1>Coming soon</h1> 
        <h2>Intergrating with Twitch APi to watch said free games live on Twitch</h2>
        {/*
        <button onClick={getVideos}>Press Me</button> 
        <div className="videoList">
            { videos.map((videos, key) => {
                return (
                    <Video
                        link={data.game_url}
                        description={data.short_description}
                        image={data.thumbnail}
                        platforms={data.platform}
                        title={data.title}
                        release={data.release_date}
                        genre={data.genre}
                        id={data.id}
                        key={key}
                    />
                )
            }) 
        </div> */}
    </StyledWatchPage>
    )
}

const StyledWatchPage = styled.div`
height: 90vh;
font-size: 1em;
background:#2c2c2c;
h1{
    font-size: 3em;
    color: white;
}
h2 {
   color: white;
}
.videoList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 3% auto;
  grid-row-gap: 5em;
  grid-column-gap: 2em;
}
`;

export default WatchPage;