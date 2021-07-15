

// styled
import styled from "styled-components";

// images
import Linkedin from '../images/linkedinWhite.png';
import Twiiter from '../images/twitterWhite.png';
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instaWhite.png';
import Github from '../images/githubWhite.png';

const Footer = () =>{
    return(
        <StyledFooter>
            <div className="iconContainer">
                <a href="https://linkedin.com"><img src={Linkedin} alt="company linkedin link" /></a>
                <a href="https://facebook.com"><img src={Facebook} alt="company facebook link" /></a>
                <a href="https://twitter.com"><img src={Twiiter} alt="company twitter link" /></a>
                <a href="https://instagram.com"><img src={Instagram} alt="company Instagram link" /></a>
                <a href="https://github.com"><img src={Github} alt="company github link" /></a>
            </div>
            <form action="">
            <input type="email"
            placeholder="Subscribe to our Email Newsletter"
            />
            <button type="submit">Sign Up</button>
        </form>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
height: 20vh;
background: #8d8d8d;
display: flex;
align-items: center;
justify-content: space-around;
border-top-left-radius: 12px;
border-top-right-radius: 12px;

@media (max-width: 920px){
    flex-direction: column;
    height: 30vh;
  }
.iconContainer {
    display: flex;
    width: 30%;
    align-items: center;
    @media (max-width: 920px){
    width: 100%;
    margin: auto;
    justify-content: center;
    }
    img {
        margin: 0 10px;
        width: 50px;
        &:hover {
            transform: scale(1.2);
        }
    }
}
form {
    width: 30%;
    display: flex;
    align-items: center;
    @media (max-width: 920px){
    width: 100%;
    margin: 4em auto;
    justify-content: center;

    }
    input {
        width: 70%;
        height: 60px;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        &:hover{
            border-radius: 8px;
            transform: scale(1.2);
        }
    }
    button {
        width: 25%;
        height: 60px;
        border: none;
        margin-left: 2px;
        font-size: 1.5em;
        font-weight: 700;
        background: white;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
        &:hover{
            border-radius: 8px;
            transform: scale(1.2);
        }
    }
}
`;

export default Footer;