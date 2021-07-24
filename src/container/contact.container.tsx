import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Typed from "react-typed";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import swal from 'sweetalert';

init("user_VcKbEvgNqCWXHlhByqVGU");

const config = {
    serviceID : "service_qwtteyi",
    templateID : "template_3f5hhcq",
    userID : "user_VcKbEvgNqCWXHlhByqVGU",
    AccessToken: "c96c23b7ebef0a50478a6a91924df8ef"

};

const ContactContainer = styled.div`
    height: 100vh;
`;

const Wrapper = styled.div`
    height: 80%;
    .contact-type {
        color: white;
        font-size: 18px;
        margin-top: 50px;
        padding-left: 40px;
    }
    .addressQ {
        margin-top: 50px;
    }
    input, textarea {
        font-size: 17px;
        width: 250px;
        border: 0;
        border-bottom: 1px solid #555;
        background-color: transparent;
        color: whitesmoke;
        font-family: 'Open Sans', sans-serif;
        padding-top: 16px;

        &:focus {
            border: none;
            outline: none;
            border-bottom: 1px solid #e74c3c;
        }
    }
    textarea {
        margin-top: 50px;
        width: 50%;
        border: 1px solid #555;
        border-radius: 5px;
    
        &:focus {
            border: 1px solid #e74c3c;

        }
    }
    button {
        color: black;
        font-family: 'Open Sans', sans-serif;
        height: 30px;
        cursor: pointer;
        width: 88px;
        margin-top: 30px;
    }
    .particles-bg-canvas-self {
        position: relative !important;
    }
   
    `;
    const Title = styled.span`
    font-size:35px;
    color: white;
    font-family: 'Orbitron', sans-serif;
    `;

const Contact = () => {

    const [contactName, setContactName] = useState("");
    const [isEmail, setEmailAddress] = useState("");
    const [isContent, setContent] = useState("");

    const popSwal = (target: string) => {
        swal({
            title: "Error",
            text: target + " is not correct",
            icon: "error"
        });
    };
    const validationCheck = () => {
        var emailRgx = /\w+@\w+.(\w+.\w+)/g;
        
        if(contactName == "") {
            popSwal("Name");
            return false;
        } else if(!emailRgx.test(isEmail)) {
            popSwal("Email");
            return false;
        } else if(isContent == "") {
           popSwal("Content");
           return false;
        } else {
            return true;
        }
    };

    const send = (e:any) => {
        e.preventDefault();
        if(validationCheck()){
            const data = {
                name : contactName,
                email : isEmail,
                content: isContent,
            };
            emailjs.send(config.serviceID, config.templateID,data )
                .then(function(response) {
                    console.log("SUCCESS", response.status, response.text);
                    setContactName("");
                    setEmailAddress("");
                    setContent("");
                    swal({
                        title: "Success",
                        text: "Yoiur email sent successfully!",
                        icon: "success"
                    });

                }, function(error) {
                    console.log('Failed', error)
                });
        } else {
            console.log("Validation Failed")
        }

    };

    return(
        <ContactContainer>
            <Wrapper className="contact-wrapper">
                 <Title>Contact</Title>
                 <div className="particle">
                 </div>
                 <div className="contact-type">
                    <div className="nameQ">
                        What's your name?
                    </div>
                    <input className="conact-name-input" value={contactName} type="text" placeholder="Name" onChange = {(e) => {
                        setContactName(e.target.value)
                    }} />
                    <div className="addressQ">
                        What's your email address?
                    </div>
                    <input className="contact-email-input" value={isEmail} type="text" placeholder="email" onChange = {(e) => {
                        setEmailAddress(e.target.value)
                    }} />
                    <div className="content">
                        <textarea placeholder="content" value={isContent} className="content-input" autoComplete="off" cols={50} rows={10} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <button onClick={(e)=> {
                        send(e);
                    }}>Submit</button>
                </div>
            </Wrapper>
        </ContactContainer> 
    )
};

export default Contact;