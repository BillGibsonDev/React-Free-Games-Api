// styled
import styled from "styled-components";

// images
import AboutImage from '../images/free-games-about.jpg';

// animations
import { motion } from 'framer-motion';
import { pageAnimations }  from '../Animations.js';

const AboutPage = () => {
    return(
        <StyledAboutPage variants={pageAnimations} initial="hidden" animate='show' exit="exit">
            <h1>About Free The Games</h1>
            <div className="textContainer">
                <p>Free The Games Website is built using <a href="https://www.freetogame.com/api-doc">Free to Game API</a>. I found this API while scouring the internet for a website to built an came across this API. This is meant to be a proof of concept but also a great resource to find new games that have the added benefit of being free!  I hope this serves you well! Happy gaming!</p>
                <img src={AboutImage} alt="" />
            </div>
        </StyledAboutPage>
    )
}

const StyledAboutPage = styled(motion.div)`
height: 80vh;
width: 80%;
margin: auto;
    @media (max-width: 1050px){
        width: 100%;
    }
    h1 {
        font-size: 4em;
        border-bottom: 4px white solid;
        width: 60%;
        color: white;
        position: relative;
        top: 10%;
        @media (max-width: 1050px){
            width: 90%;
            margin: auto;
            top: 5%;
        } 
        @media (max-width: 1050px){
            font-size: 3em;
        }
    }
    .textContainer {
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 1050px){
            flex-direction: column;
            height: 80%;
        }
        p {
            width: 50%;
            font-size: 2em;
            color: white;
            @media (max-width: 1050px){
                width: 90%;
                margin: 2em 0;
            } 
            @media (max-width: 450px){
                font-size: 2.5em;
            } 
            a {
                text-decoration: underline;
                color: white;
                &:hover{
                    color: #6969c7ce;
                }
            }
        }
        img {
            border-radius: 12px;
            width: 540px;
            margin-left: 10px;
            @media (max-width: 950px){
                width: 90%;
                margin: 0;
            } 
        }
    }
`;

export default AboutPage;