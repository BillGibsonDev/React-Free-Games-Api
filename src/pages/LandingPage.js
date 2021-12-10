import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Game from '../components/Game.js';
import Loader from '../components/Loader.js';

// styled
import styled from "styled-components";

// animations
import { motion } from 'framer-motion';
import { pageAnimations }  from '../Animations.js';


const LandingPage = () => {
  useEffect(() => {
    getGames();
    // eslint-disable-next-line
  }, []);


    const [ data, setData ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ value, setValue ] = useState(20);

    let auth = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {'sort-by': `release-date`},
        headers: {
          'x-rapidapi-key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

    function getGames(){
      axios.request(auth).then(function (response) {
        setLoading(false)
        setData(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }

    function handleShowMore(){
      let i = 20;
      setValue(value + i)
    }

  return(
    <StyledLandingPage variants={pageAnimations} initial="hidden" animate='show' exit="exit" >
        {
          isLoading === true ? (
            <Loader />
          ):(
            <div className="landing-wrapper">
              <div className="gameList">
                {
                  data.slice(0,value).map((data, key) => {
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
            <button onClick={handleShowMore}>Show More</button>
        </div>
        )}
    </StyledLandingPage>
  )
}

const StyledLandingPage = styled(motion.div)`
height: 100%;
font-size: 1em;
width: 80%;
margin: auto;
  .landing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
    .gameList {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
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
    button {
        width: 200px;
        height: 50px;
        margin: 1em auto;
        cursor: pointer;
        border: none;
        border-radius: 12px;
        background: #1d72f7;
        color: white;
        transition: 0.1s;
        font-size: 2em;
          @media (max-width: 950px){
            grid-template-columns: 1fr;
            font-size: 2em;
            grid-row-gap: 1em;
          } 
          &:hover{
              transform: scale(1.02);
              border: 2px white solid;
          }
        }
    }
`;

export default LandingPage;