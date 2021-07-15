import { useState, useEffect } from 'react';

// ....
import axios from 'axios';

// components
import Game from '../components/Game.js';

// styled
import styled from "styled-components";

// animations
import { motion } from 'framer-motion';
import { pageAnimations }  from '../Animations.js';



const LandingPage = () => {
  useEffect(() => {
    getSortReleaseDate();
  }, []);


    const [ data, setData ] = useState([]);
    let [ title, setTitle ] = useState(false);

    let auth = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {'sort-by': 'release-date'},
        headers: {
          'x-rapidapi-key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
    //
      // get games by release
      //
    function getSortReleaseDate(){
    axios.request(auth).then(function (response) {
      console.log(response.data);
      setData(response.data);
      setTitle('Release Date');
    }).catch(function (error) {
      console.error(error);
    });
    }
    let auth3 = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {'sort-by': 'alphabetical'},
        headers: {
          'x-rapidapi-key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
    //
    // get games by alphabetical
    //
    function getSortAlpha(){
    axios.request(auth3).then(function (response) {
      console.log(response.data);
      setData(response.data);
      setTitle('Alphabetical');
    }).catch(function (error) {
      console.error(error);
    });
    }
    let auth4 = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { 'sort-by': `relevance`},
        headers: {
          'x-rapidapi-key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
    
      //
      // get popluar
      //
    function getRevelance(){
    axios.request(auth4).then(function (response) {
      console.log(response.data);
      setData(response.data);
      setTitle('Popular');
    }).catch(function (error) {
      console.error(error);
      alert('Search error')
    });
    }


return(
    <StyledLandingPage variants={pageAnimations} initial="hidden" animate='show' exit="exit" >
        <div className="buttonContainer" id="buttonContainer">
            <h2>Sort By:</h2>
            <button onClick={() => { getSortReleaseDate();}} id="release">Release Date</button> 
            <button onClick={() =>{ getSortAlpha();}}>Alphabetical</button> 
            <button onClick={()=> { getRevelance();}}>Popular</button>
        </div>
        <h1>{title}</h1>
        <div className="gameList">
            {data.map((data, key) => {
                return (
                    <Game
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
            })}
        </div>
    </StyledLandingPage>
    )
}

const StyledLandingPage = styled(motion.div)`
height: 100%;
font-size: 1em;
background:#2c2c2c;
h1{
    margin: 1em 1em;
    font-size: 4em;
    border-bottom: 4px solid black;
    width: 60%;
    color: white;
    
}
.buttonContainer{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 950px){
      flex-direction: column;
    } 
    h2 {
      font-size: 2.5em;
      color: white;
      @media (max-width: 950px){
        margin: 1em;
        font-size: 4em;
      } 
    }
    button {
        width: 200px;
        height: 50px;
        margin: 1em;
        cursor: pointer;
        border: none;
        border-radius: 12px;
        background: #1c2841;
        box-shadow: 4px 4px 20px #0000006e;
        color: white;
        transition: 0.3s;
        font-size: 2em;
        @media (max-width: 950px){
          grid-template-columns: 1fr;
          font-size: 2em;
          grid-row-gap: 1em;
        } 
        &:hover{
            transform: scale(1.1);
        }
    }
}

.gameList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 3% auto;
  grid-row-gap: 5em;
  grid-column-gap: 2em;
  width: 90%;
  @media (max-width: 950px){
    grid-template-columns: 1fr;
    font-size: 2em;
    grid-row-gap: 1em;
  } 
}

`;

export default LandingPage;