import React from 'react';
import styled from 'styled-components';
import Typed from "react-typed";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { computerGreen, amber } from "../styles/styleConstants";
import memoji from "../assets/memoji.gif";
const Title = styled.span`
font-size:35px;
color: white;
font-family: 'Orbitron', sans-serif;
`;

const Right = styled.div`
`;
const Wrapper = styled.div`
    height: 80%;
    padding-top: 90px;
`;
const Introduce = styled.div`
    line-height: 30px;
    font-family: 'Jura', sans-serif;
    color: white;
    font-size: 25px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .cv {
        width: fit-content;
        margin-top: 50px;
        font-family: 'Jura', sans-serif;
        color: ${amber}
    }
    a {
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration : underline;
        text-underline-offset: 0.2em;
        font-style: italic;
    }
}
`;

const Left = styled.div``;
const AboutMeContainer = styled.div`
height: 100vh;
`;
const aboutMe = () => {
    return(
        <AboutMeContainer>
        <Wrapper className="wrapper">
        <Title>Code the dream <br></br>
        Build the World
        </Title>

        <Introduce>
        <Left>
        Hi 👋 I'm {' '}
        <Typed 
            className="name"
            strings={['Nayoun ham', 'Ellie', '001111110011111100111111','👩‍💻']}
            typeSpeed={30}
            backSpeed={30}
            fadeOut={false}
            loop={true}    
        ></Typed>
        {' '}, Software developer. <br/> 
        Love to challenge new things like new trends and activities. <br/>
        Trying to change the world more friendly and energetic with my skills. <br/>
        I believe world can be better with technologies from better person. <br />
        If you have a same value with me, scroll down to last page then you can send me an email. <br />
        Or you can get in touch with LinkedIn message.
        <div className="cv">
        <a className="resume" href="../file/resume.pdf" target="_blank" download>
        <ArrowForwardIosIcon />
            Download CV
            </a>
        </div>
        </Left>
        <Right>
            <img src={memoji} />
        </Right>
        </Introduce>
        </Wrapper>
        </AboutMeContainer>
    )
}

export default aboutMe;