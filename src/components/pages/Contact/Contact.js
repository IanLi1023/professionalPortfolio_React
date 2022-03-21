import React, { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Contact.css';
import emailjs from '@emailjs/browser';


function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_15li1sa', e.target, 'mKShI8BsWNkTQdB8F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            alert("Your message has been successfully sent!")
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div classdName="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div classdName="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div classdName="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send" />
                        </div>
                    </div> 
                </form>
            </div >
            <footer>
                <h5 id="contact" className="sub-container">Contact Me and Let Us Work Together!</h5>

                <div id="contact-section">
                    <article className="contact-div" id="email">
                        <a className="contact-icon" href="mailto:Ian.Li1023@gmail.com">
                            <i className="far fa-envelope fa-2x"></i>
                            <MailOutlineIcon sx={{ fontSize: "4rem" }} />
                            <p className="contact-text">Email</p>
                        </a>
                    </article>

                    <article className="contact-div" id="phone">
                        <a className="contact-icon" href="tel:303.564.0668">
                            <i className="fas fa-phone fa-2x"></i>
                            <LocalPhoneIcon sx={{ fontSize: "4rem" }} />
                            <p className="contact-text">Phone</p>
                        </a>
                    </article>

                    <article className="contact-div" id="linkedin">
                        <a className="contact-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ian-li1023/">
                            <LinkedInIcon sx={{ fontSize: "4rem" }} />
                            <p className="contact-text">LinkedIn</p>
                        </a>
                    </article>

                    <article className="contact-div" id="github">
                        <a className="contact-icon" target="_blank" rel="noreferrer" href="https://github.com/IanLi1023">
                            <GitHubIcon sx={{ fontSize: "4rem" }} />
                            <p className="contact-text">GitHub</p>

                        </a>
                    </article>
                </div>
            </footer>
        </div >





    );
};

export default ContactForm;

