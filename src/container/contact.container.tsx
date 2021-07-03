import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Typed from "react-typed";

const ContactContainer = styled.div`
    height: 100vh;
`;

const Wrapper = styled.div`
    height: 80%;
    .contact-type {
        color: white;
        font-size: 25px;
        margin-top: 50px;
    }
`;
const Title = styled.span`
font-size:35px;
color: white;
font-family: 'Orbitron', sans-serif;
`;
const Contact = () => {

    const [isInput, showInput] = useState(false);
    const [contactName, setContactName] = useState("");
    return(
        <ContactContainer>
            {/* <Wrapper className="contact-wrapper">
                 <Title>Contact</Title>
                 <div className="contact-type">
                 <Typed
                    className="contactType"
                    strings={[
                        "What's your name?"
                    ]}
                    typeSpeed={55}
                    onComplete={function () {
                       showInput(true)
                    }}
                    />
                    {isInput && (
                        <form className="contact-form">
                            <input value={contactName} type="text" placeholder="Let me know your name"
                                onChange={(e) => {setContactName(e.target.value)}}
                            />
                        </form>
                    )}
                 </div>
            </Wrapper> */}
        </ContactContainer> 
    )
};

export default Contact;