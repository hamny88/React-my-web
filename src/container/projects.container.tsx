import React from "react";
import styled from 'styled-components';
import resource from '../file/index';

const ProjectContainer = styled.div`
padding: 10px;
    height: 100vh;
    a {
        text-decoration: none;
    }
    a:visited {
        color: black;
    }
    .title {
        font-weight: 600;
    margin-top: 30px;
    }
`;
const Title = styled.span`
font-size:35px;
color: white;
font-family: 'Orbitron', sans-serif;
`;

const Item = styled.div`
   background-color: #EDEDED;
    border-radius: 5px; 
    margin-top: 20px;
    padding: 10px;
    width: 200px;
    height: 100px;
    margin-right: 50px;
    font-family: 'Jura', sans-serif;    
  text-align: center;
  font-size: 22px;
  &:hover {
    -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 
  }
`;

const Grid = styled.div`
    display: flex;
    margin-top: 30px;
`;

const projects = () => {

    const prj = [{
    project: "pocketSurvey",
    url: "https://home.pocketsurvey.co.kr/",
    },
    {
        project: "ATNS usa",
        url: "https://www.wenestim.com/default.html",
    },
    {
        project: "KISC",
        url: resource.KISC,
    }
    ];

    return(
        <ProjectContainer>
        <Title>projects</Title>
        <Grid>
            {
                prj.map((item) => {
                    return (
                        <a href={item.url} target="_blank" >
                        <Item>
                            <div className="title">{item.project}</div>
                        </Item>
                        </a>

                    )
                })
            }
        </Grid>
        </ProjectContainer>
    )
};

export default projects;