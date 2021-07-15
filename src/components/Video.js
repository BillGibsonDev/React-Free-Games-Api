import styled from "styled-components";


const Video = ({  }) => {

    return (
        <StyledVideo>
            
        </StyledVideo>
        
    );
};
const StyledVideo = styled.div`
display: flex;
flex-direction: column;
background: lightgray;
box-shadow: 4px 4px 20px #0000006e;
border-radius: 12px;
padding: 12px;
&:hover{
            transform: scale(1.2);
        }
    a   {
        color: black;
        width: 100%;
    }
    img {
        width: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    h3 {
        font-size: 2em;
    }
    p {
        font-size: 1.2em;
        margin: 1em 0;
        max-height: 20%;
        overflow: hidden;
    }
    h5 {
        font-size: 1em;
    }
`;
export default Video;