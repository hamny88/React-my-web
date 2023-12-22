import styled from "styled-components";
import "../App.css";
import Typed from "react-typed";
import { Me } from "../assets";

const AboutMeContainer = styled.div`
  height: 100vh;
  color: white;
`;
const Text = styled.div`
  color: "#FFFFFF";
  font-size: 30px;
  font-family: "Juran";
`;

const Introduce = styled.div`
  height: 300px;
`;
const MyPhoto = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: center;
  img {
    width: 300px;
  }
`;
const FlexBox = styled.div`
  display: flex;
`;
const Download = styled.div`
  position: relative;
  display: flex;
  .resume,
  .Notion,
  .Blog {
    margin-top: 20px;
    font-family: "Press";
    display: flex;
    cursor: pointer;
  }
  .Blog,
  .Notion {
    margin-left: 20px;
  }
  .btn {
    border: 0.8px solid white;
    padding: 15px;
    border-radius: 6px;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
const Discript = styled.div`
  margin-top: 20px;
  line-height: 1.5;
  font-family: "Jura";
  font-size: 20px;
`;

const aboutMe = () => {
  return (
    <AboutMeContainer>
      <Text>Nayoun Ham</Text>
      <Text>Software Engineer</Text>
      <FlexBox>
        <Introduce>
          <Discript>
            Majored Information Security @Seoul Womens University <br />
            Worked as a Software Developer <br />
            Now, M.S studnet of Computer Vision @University of Central Florida{" "}
            <br />
            Interested in Computer Vision, Autonomous systems, Efficient workflows and Medical Vision.
          </Discript>
        </Introduce>

        <MyPhoto className="Selfie">
          <img src={Me} />
        </MyPhoto>
      </FlexBox>
      <Download>
        <div className="resume">
          <div
            className="btn"
            onClick={() =>
              window.open("https://drive.google.com/file/d/15iPiJ6t-TWW6EIdvg8pRvUv9h6v907uJ/view?usp=sharing")
            }
          >
            CV / Resume
          </div>
        </div>
        {/* <div className="Notion">
          <div
            className="btn"
            onClick={() =>
              window.open(
                "https://www.notion.so/Nayoun-Ham-s-portfolio-932d6bbe22b646f3aca9603a704b1a14"
              )
            }
          >
            Notion CV
          </div>
        </div> */}
        <div className="Blog">
          <div
            className="btn"
            onClick={() => window.open("https://nayounlovesprawn.tistory.com/")}
          >
            Blog
          </div>
        </div>
      </Download>
    </AboutMeContainer>
  );
};

export default aboutMe;
