import React from 'react';
import '../Footer/Footer.css';

function Footer() {
    return (
        <footer>
        <h5 id="contact" className="sub-container">Contact Me and Let Us Work Together!</h5>

            <div id="contact-section">
                <article className="contact-div" id="email">
                    <a className="contact-icon" href="mailto:Ian.Li1023@gmail.com">
                        <i className="far fa-envelope fa-2x"></i>
                        <p className="contact-text">Email</p>
                    </a>
                </article>

                <article className="contact-div" id="phone">
                    <a className="contact-icon" href="tel:303.564.0668">
                        <i className="fas fa-phone fa-2x"></i>
                        <p className="contact-text">Phone</p>
                    </a>
                </article>

                <article className="contact-div" id="linkedin">
                    <a className="contact-icon" target="_blank" href="https://www.linkedin.com/in/ian-li1023/">
                        <i className="fab fa-linkedin-in fa-2x"></i>
                        <p className="contact-text">LinkedIn</p>
                    </a>
                </article>

                <article className="contact-div" id="github">
                    <a className="contact-icon" target="_blanks" href="https://github.com/IanLi1023">
                        <i className="fab fa-github fa-2x"></i>
                        <p className="contact-text">GitHub</p>
                    </a>
                </article>
            </div>
    </footer>
    );
}

export default Footer;