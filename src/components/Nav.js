// styled
import styled from "styled-components";

// router
import { Link } from 'react-router-dom';

// images
import Logo from '../images/gamepad.png';



const Nav = () => {
    // hides / shows nav bar on scroll down / up
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav").style.top = "0";
            document.getElementById("nav").style.border = "2px black solid";
        } else {
            document.getElementById("nav").style.top = "-150px";
            document.getElementById("nav").style.border = "2px #1d72f7 solid";
        }
        prevScrollpos = currentScrollPos;
    }

    return(
        <StyledNav id="nav">
            <div className="nav-wrapper">
                <div className="logo-wrapper">
                    <img src={Logo} alt="" />
                    <h3>Free The Games</h3>
                </div>
                
                <nav id="nav">
                    <Link to='/'>Home</Link>
                    <Link to="/AboutPage">About</Link>
                </nav>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 8vh;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
background: #1d72f7;
padding: 1em 0;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
z-index: 99;
width: 80%;
margin: 0 auto;
    @media (max-width: 1250px){
        width: 100%;
    } 
    .nav-wrapper{
        display: flex;
        width: 95%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        .logo-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 200px;
            position: relative;
            @media (max-width: 1250px){
                width: 25%;
            }
            @media (max-width: 600px){
                width: 35%;
            }
            @media (max-width: 415px){
                width: 45%;
            }
            h3 {
                font-size: 2.5em;
                color: #ffffff;
                position: relative;
            }
            img {
                position: absolute;
                width: 100%;
                height: 100%;
            }
        }
            nav {
                display: flex;
                width: 10%;
                justify-content: space-between;
                @media (max-width: 1450px){
                    width: 15%;
                }
                @media (max-width: 1050px){
                    width: 25%;
                }
                @media (max-width: 750px){
                    width: 30%;
                }
                @media (max-width: 400px){
                    width: 35%;
                }
                a {
                    font-size: 2em;
                    color: #ffffff;
                    font-weight: bold;
                    letter-spacing: 1px;
                    transition: 0.3s;
                    &:hover{
                        transform: scale(1.2);
                    }
                }
            }
    }
`;

export default Nav;