import React from 'react';
import './Aboutme.css';

function MainContent() {
    return (
        <main id="content">
        <div id="about-section">
            <h2 id="about" className="sub-container">About Me</h2>
            <img id="professsional-profile-image" src="/images/professionalprofilephoto.jpg"
                alt="photo of Ian Li" />
            <p className="about-exp">
                My name is Ian Li. I am a full stack web developer with
                experience in HTML, CSS, JavaScript, nodeJS, SQL and Handlebars. I currently working on a Certificate in
                Full Stack Web Development from the
                University of Denver coding bootcamp. I am very passionate about web
                development and I am excited to combine my experiences with my new skills to
                provide excellent experiences for the web. I am an eager learner and love to
                help other.
            </p>
            <p className="about-exp">
                I have experience in the following languages and libraries:
            </p>
            <div className="exp-icons">
                <img src="/images/bootstrap.jpg" alt="bootstrap icon" id="icons-pics"  />
                <img src="/images/CSS.jpg" alt="css icon" id="icons-pics" />
                <img src="/images/handlebars.jpg" alt="handlebars icon" id="icons-pics" />
                <img src="/images/jquery.jpg" alt="jquery icon" id="icons-pics" />
                <img src="/images/js.jpg" alt="javaScript icon" id="icons-pics" />
                <img src="/images/nodejs.jpg" alt="nodeJS icon" id="icons-pics" />
                <img src="/images/html.jpg" alt="html icon" id="icons-pics"/>
            </div>
            <p className="about-exp">
                Outside of coding, my passions include basketball (playing and coaching), Crossfit, mountain
                biking, hiking and snowboarding.
            </p>
            
            <a href="/images/Resume 12.16.21.pdf" rel="noreferrer" className="btn" target="_blank">Click Here For My Resume</a>

        </div>
    </main>
    );
}

export default MainContent;