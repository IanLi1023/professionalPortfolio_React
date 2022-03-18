import React from 'react';
import '../Header/Header.css';

function MainContent() {
    return (
        <main id="content">
        <div id="about-section">
            <h2 id="about" className="sub-container">About Me</h2>
            <img id="professsional-profile-image" src="./public/assets/images/professionalprofilephoto.jpg"
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
                <img id="icons-pics" src="public/assets/bootstrap.jpg" />
                <img id="icons-pics" src="public/assets/images/CSS.jpg" />
                <img id="icons-pics" src="public/assets/images/handlebars.jpg" />
                <img id="icons-pics" src="public/assets/images/jquery.jpg" />
                <img id="icons-pics" src="public/assets/images/js.jpg" />
                <img id="icons-pics" src="public/assets/images/nodejs.jpg" />
                <img id="icons-pics" src="public/assets/images/html.jpg" />
            </div>
            <p className="about-exp">
                Outside of coding, my passions include basketball (playing and coaching), Crossfit, mountain
                biking, hiking and snowboarding.
            </p>
            
            <a href="public/assets/images/Resume 12.16.21.pdf" className="btn" target="_blank">Click Here For My Resume</a>
        </div>
    </main>
    );
}

export default MainContent;