import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { computerGreen, amber } from "../styles/styleConstants";
import memoji from "../assets/memoji.gif";
import resource from "../file/index";
import "../App.css";

const AboutMeContainer = styled.div`
  height: 100vh;
  color: white;
`;
const Text = styled.div`
    color: '#FFFFFF';
    font-family: 'Noto';
    font-size: 30px;
`;
const aboutMe = () => {
  return(
    <AboutMeContainer>
        <Text>
            Nayoun Ham <br/>
            Information Security @Seoul Women's University<br/>
            Front-End developer @Linkr<br/>
        </Text>
    </AboutMeContainer>
  ) ;
};

export default aboutMe;
