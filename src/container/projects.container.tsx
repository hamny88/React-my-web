import React from "react";
import styled from 'styled-components';

const ProjectContainer = styled.div`
    height: 100vh;
`;
const Title = styled.span`
font-size:35px;
color: white;
font-family: 'Orbitron', sans-serif;
`;

const projects = () => {
    return(
        <ProjectContainer>
        <Title>projects</Title>
        </ProjectContainer>
    )
};

export default projects;