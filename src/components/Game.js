
import styled from "styled-components";


const Game = ({ title, description, platforms, id, image, link, genre, release }) => {

    return (
        <StyledGame id={id}>
            <a href={link} target="_blank">
                <img src={image} />
                <h3>{title}</h3>
                <p>{description}</p>
                <h5>{release}</h5>
                <h5>{platforms}</h5>
                <h5>{genre}</h5>
            </a>
        </StyledGame>
        
    );
};
const StyledGame = styled.div`
display: flex;
flex-direction: column;
background: #1c2841a4;
box-shadow: 4px 4px 20px #0000006e;
border-radius: 12px;
padding: 12px;
&:hover{
            transform: scale(1.1);
            transition: 0.3s;
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