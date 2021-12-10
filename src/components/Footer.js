// styled
import styled from "styled-components";

// images
import Linkedin from '../images/linkedinWhite.png';
import Twiiter from '../images/twitterWhite.png';
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instaWhite.png';
import Github from '../images/githubWhite.png';

const Footer = () => {
    return (
        <StyledFooter>
            <div className="widthContainer">
                <div className="iconContainer">
                    <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="company linkedin link"/></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt="company facebook link"/></a>
                    <a href="https://twitter.com/DevGibby" target="_blank" rel="noreferrer"><img src={Twiiter} alt="company twitter link"/></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={Instagram} alt="company Instagram link"/></a>
                    <a
                        href="https://github.com/DevGibby/React-Free-Games-Api"
                        target="_blank"
                        rel="noreferrer"><img src={Github} alt="company github link"/></a>
                </div>
                <form action="">
                    <input type="email" placeholder="Subscribe to our Email Newsletter"/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div `
height: 20vh;
width: 100%;
background: #1d72f7;
display: flex;
align-items: center;
justify-content: space-around;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
    @media (max-width: 920px){
        flex-direction: column;
        height: 30vh;
    }
    .widthContainer{
      width: 70%;
      display: flex;
      justify-content: space-between; 
        @media (max-width: 920px){
            flex-direction: column;
        }
        .iconContainer {
            display: flex;
            width: 30%;
            align-items: center;
            @media (max-width: 920px){
                width: 90%;
                margin: auto;
                justify-content: center;
            }
            img {
                margin: 0 10px;
                width: 50px;
                &:hover {
                    transform: scale(1.2);
                    transition: 0.3s;
                }
            }
        }
        form {
            width: 50%;
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
                transition: 0.1s;
                @media (max-width: 920px){
                    width: 100%;
                }
                &:hover{
                    border: 2px black solid;
                }
            }
            button {
                width: 25%;
                height: 60px;
                border: none;
                margin-left: 2px;
                font-size: 1.2em;
                font-weight: 700;
                background: #1f1f1f;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
                cursor: pointer;
                transition: 0.1s;
                color: white;
                &:hover{
                    border: 2px white solid;
                }
            }
        }
    }
`;

export default Footer;