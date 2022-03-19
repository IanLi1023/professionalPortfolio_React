import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Contact.css';


function ContactMe() {
    return (
        <footer>
        <h5 id="contact" className="sub-container">Contact Me and Let Us Work Together!</h5>

            <div id="contact-section">
                <article className="contact-div" id="email">
                    <a className="contact-icon" href="mailto:Ian.Li1023@gmail.com">
                        <i className="far fa-envelope fa-2x"></i>
                        <MailOutlineIcon sx={{ fontSize: "4rem" }}/>
                        <p className="contact-text">Email</p>
                    </a>
                </article>

                <article className="contact-div" id="phone">
                    <a className="contact-icon" href="tel:303.564.0668">
                        <i className="fas fa-phone fa-2x"></i>
                        <LocalPhoneIcon sx={{ fontSize: "4rem" }}/>
                        <p className="contact-text">Phone</p>
                    </a>
                </article>

                <article className="contact-div" id="linkedin">
                    <a className="contact-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ian-li1023/">
                        <LinkedInIcon sx={{ fontSize: "4rem" }}/>
                        <p className="contact-text">LinkedIn</p>
                    </a>
                </article>

                <article className="contact-div" id="github">
                    <a className="contact-icon" target="_blank" rel="noreferrer" href="https://github.com/IanLi1023">
                        <GitHubIcon sx={{ fontSize: "4rem" }}/>
                        <p className="contact-text">GitHub</p>
                       
                    </a>
                </article>
            </div>
    </footer>
    );
}

export default ContactMe;