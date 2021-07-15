// styled
import styled from "styled-components";

// router
import { Link } from 'react-router-dom';

// images
import Logo from '../images/gamepad.png';



const Nav = () => {
// hides / shows nav bar on scroll down / up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

    return(
        <StyledNav id="nav">
            <h3>Free The Games <img src={Logo} id="logo"/></h3>
            <nav id="nav">
                <Link to='/'>Home</Link>
                <Link to='/WatchPage'>Watch</Link>
                <Link to="/AboutPage">About</Link>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 10vh;
display: flex;
width: 100%;
align-items: center;
justify-content: space-around;
position: sticky;
background: white;
padding: 1em 0;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
z-index: 99;
h3{
    font-size: 2.5em;
    color: black;
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
        color: black;
        font-weight: bold;
        letter-spacing: 1px;
        &:hover{
            transform: scale(1.2);
        }
    }
}
`;

export default Nav;