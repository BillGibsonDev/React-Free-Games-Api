import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Loader from '../components/Loader.js';
import SimpleSlider from '../components/SimpleSlider.js';

// styled
import styled from "styled-components";

// animations
import { motion } from 'framer-motion';
import { pageAnimations }  from '../Animations.js';

// router
import { useParams, Link } from 'react-router-dom';

// images
import arrowLeft from '../images/arrowLeftWhite.png';

const GamePage = () => {

    const { gameId } = useParams();

    useEffect(() => {
        getGame();
        // eslint-disable-next-line
    }, []);

    const [ data, setData ] = useState([]);
    const [ screenshots, setScreenshots ] = useState([]);
    const [ isLoading, setLoading ] = useState(true)

   let options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: `${gameId}` },
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': '10cc7e915dmshfad88ab5bb469c4p122e85jsn9b0d600d5755'
        }
    };

    function getGame(){
        axios.request(options).then(function (response) {
            setLoading(false)
            setData(response.data)
            setScreenshots(response.data.screenshots)
        }).catch(function (error) {
            console.error(error);
        });
    }
    
  return(
    <StyledGamePage variants={pageAnimations} initial="hidden" animate='show' exit="exit" >
        {
          isLoading === true ? (
            <Loader />
          ):(
            <div className="game-wrapper">
                <header>
                    <h1>{data.title}</h1>
                    <Link id="back-button" to="/"><span><img src={arrowLeft} alt="" /></span>Back</Link>
                </header>
                <div className="title-container">
                    <img src={data.thumbnail} alt="" />
                    <p><span>Description: </span>{data.description}</p>
                </div>
                <div className="specs-container">
                    <div className="info-wrapper">
                        <h2>Info</h2>
                        <div className="info-container">
                            <h5><span>Developer: </span>{data.developer}</h5>
                            <h5><span>Genre: </span>{data.genre}</h5>
                            <h5><span>Released: </span>{data.release_date}</h5>
                            <h5><span>Platform: </span>{data.platform}</h5>
                            <h5><span>Publisher: </span>{data.publisher}</h5>
                            <h5><span>Status: </span>{data.status}</h5>
                            <a href={data.game_url} target="_blank" rel="noreferrer"><span>Store Link: </span>{data.game_url}</a>
                        </div>
                    </div>
                    <div className="system-req-wrapper">
                        <h2>System Requirements</h2>
                        <div className="system-req-container">
                            <h5><span>Operating System: </span>{data.minimum_system_requirements.os}</h5>
                            <h5><span>Graphics Card: </span>{data.minimum_system_requirements.graphics}</h5>
                            <h5><span>Processor: </span>{data.minimum_system_requirements.processor}</h5>
                            <h5><span>Storage: </span>{data.minimum_system_requirements.storage}</h5>
                            <h5><span>Memory: </span>{data.minimum_system_requirements.memory}</h5>
                        </div>
                    </div>
                </div>
                <div className="screenshot-container">
                    <h2>Screenshots</h2>
                    <SimpleSlider
                        images={screenshots}
                    />
                </div>
            </div>
            )
        }
    </StyledGamePage>
  )
}

const StyledGamePage = styled(motion.div)`
min-height: 80vh;
    .game-wrapper {
        width: 90%;
        margin: 5% auto;
        header{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin: 5% 0;
            h1 {
                font-size: 5em;
                color: white;
            }
            #back-button {
            position: relative;
            color: white;
            font-size: 3em;
            transition: 0.2s;
            display: flex;
            align-items: center;
            span {
                img {
                    width: 20px;
                }
            }
            &:hover {
                transform: scale(1.05);
                color: #386ad4;
            }
        }
        }
            .title-container {
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 5%;
                img {
                    width: 40%;
                }
            }
            p {
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: white;
                font-size: 1.5em;
                letter-spacing: 1px;
                line-height: 1.5; 
                width: 50%;
                height: 100%;
                span {
                    color: #d6d6d6;
                }
            }
        }
        .specs-container {
            display: flex;
            height: 100%;
            .info-wrapper, .system-req-wrapper {
                margin: 2em 0;
                width: 50%;
                height: 100%;
                h2 {
                    color: white;
                    font-size: 2em;
                    border-bottom: 2px solid white;
                    width: 40%;
                }
                .info-container, .system-req-container {
                    width: 100%;
                    h5, a {
                        display: flex;
                        flex-direction: column;
                        margin: 10px 0;
                        color: white;
                        font-weight: 700;
                        letter-spacing: 1px;
                        line-height: 1.5; 
                        span {
                            color: #d6d6d6;
                        }
                    }
                    h5 {
                        font-size: 2em;
                    }
                    a {
                        font-size: 2em;
                        &:hover{
                            color: black;
                        }
                    }
                }
            }
        }
        .screenshot-container {
            width: 70%;
            margin: 5% auto;

            h2 {
                font-size: 3em;
                color: white;
            }
            img {
                width: 100%;
            }
        }
    }

`;

export default GamePage;