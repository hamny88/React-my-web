import styled from "styled-components";

const ContactContainer = styled.div`
  height: 105vh;
`;

const Wrapper = styled.div`
  height: 80%;
`;

const Font = styled.div`
font-family: "Jura", sans-serif;
color: white;
`
const Title = styled.span`
  font-size: 35px;
  color: white;
  font-family: "Orbitron", sans-serif;
`;

const Details = styled.div`
  margin-top: 30px;
`;

const NewContact = () => {
  return (
    <ContactContainer className="contatc-container">
      <Font>
      <Wrapper className="contact-wrapper">
        <Title>Contact</Title>
          <Details>
            Email: ellie.hahm0502@gmail.com <br />
            Based on Orlando, Florida, United States <br />
          </Details>
      </Wrapper>
      </Font>
    </ContactContainer>
  );
};

export default NewContact;
