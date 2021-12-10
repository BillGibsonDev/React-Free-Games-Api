// styled
import styled from "styled-components";

// router
import { Link } from 'react-router-dom';

const Game = ({ title, platforms, id, image, genre, release }) => {

    return (
        <StyledGame id={id}>
            <Link to={`/games/${id}`}>
                <img src={image} alt=""/>
                <h3>{title}</h3>
                <h5>{release}</h5>
                <h5>{platforms}</h5>
                <h5>{genre}</h5>
            </Link>
        </StyledGame>
        
    );
};
const StyledGame = styled.div`
display: flex;
flex-direction: column;
background: #1d72f7;
border: 2px #1d72f7 solid;
box-shadow: 4px 4px 20px #0000006e;
border-radius: 12px;
padding: 12px;
transition: 0.3s;
    &:hover{
        transform: scale(1.02);
        transition: 0.1s;
        border: 2px white solid;
    }
    a   {
        color: #ffffff;
        width: 100%;
    }
    img {
        width: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    h3 {
        font-size: 2em;
        letter-spacing: 1px;
    }
    p {
        font-size: 1.5em;
        margin: 1em 0;
        max-height: 20%;
        overflow: hidden;
        color: #ffffff;
    }
    h5 {
        font-size: 1.2em;
        margin: 2px;
        letter-spacing: 1px;
    }
`;
export default Game;