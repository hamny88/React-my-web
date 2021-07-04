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

const Item = styled.div`
   background-color: #EDEDED;
    border-radius: 5px; 
`;

const Grid = styled.div`
    display: grid;
    width: 90%;
    height: 80%;
    gap: 25px 33px;
    margin-top: 30px;
    grid-template-columns: repeat(auto-fill, minmax(15%, auto));
`;

const projects = () => {

    const prj = [{
    project: "pocketSurvey",
    due: "2021.01 ~ Present",
    role: "FrontEnd dev",
    },
    {
        project: "ATNS usa",
        due: "2019.07 ~ 2020.06",
        role: "FroneEnd dev",
    }
    ];

    return(
        <ProjectContainer>
        <Title>projects</Title>
        <Grid>
            {
                prj.map((item) => {
                    return (
                        <Item>
                            <div className="title">{item.project}</div>
                            <div className="period">{item.due}</div>
                            <div className="role">{item.role}</div>
                        </Item>
                       
                    )
                })
            }
        </Grid>
        </ProjectContainer>
    )
};

export default projects;