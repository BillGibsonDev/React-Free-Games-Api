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
  } else {
    document.getElementById("nav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

    return(
        <StyledNav id="nav">
            <h3>Free The Games <img src={Logo} id="logo" alt=""/></h3>
            <nav id="nav">
                <Link to='/'>Home</Link>
                <Link to='/WatchPage'>Watch</Link>
                <Link to="/AboutPage">About</Link>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 8vh;
display: flex;
align-items: center;
justify-content: space-around;
position: sticky;
background: #1d72f7;
padding: 1em 0;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
z-index: 99;
    h3{
        font-size: 2.5em;
        color: #ffffff;
    }
    #logo {
        width: 40px;
        @media (max-width: 950px){
            width: 25px;
        } 
    }
    nav {
        display: flex;
        width: 30%;
        justify-content: space-between;
        margin-left: 1em;
        @media (max-width: 950px){
            width: 50%;
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
`;

export default Nav;