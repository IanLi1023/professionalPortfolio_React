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

            <div id="work-section">
                <h2 id="work" className="sub-container">My Work</h2>

                <article id="work-samples">

                    <div className="work-flexbox" id="flex-one">
                        <a target="_blank" className="all-tag" href="https://agmorrow.github.io/Project1_DinnerParty/">
                            <img className="large-image work-image" src="public/assets/images/dinnerparty.jpg"
                                alt="Dinner Party Project Screenshot" />

                            <div className="work-text" id="dinner-text">
                                <h3 className="work-title">Dinner Party</h3>
                                <h4 className="repo-link">
                                    <a target="_blank" className="all-tag"
                                        href="https://github.com/agmorrow/Project1_DinnerParty">Code here</a>
                                </h4>
                            </div>
                        </a>
                    </div>

                    <div className="work-flexbox" id="flex-one">
                        <a target="_blank" className="all-tag" href="https://chartmd.herokuapp.com/">
                            <img className="large-image work-image" src="./public/assets/images/chartmd.jpg"
                                alt="ChartMD Project Screenshot" />

                            <div className="work-text" id="dinner-text">
                                <h3 className="work-title">Chart MD</h3>
                                <h4 className="repo-link">
                                    <a target="_blank" className="all-tag"
                                        href="https://github.com/stuartwood2010/chartMd_app/">Code here</a>
                                </h4>
                            </div>
                        </a>
                    </div>

                    <div className="work-flexbox" id="flex-two">
                        <a target="_blank" className="all-tag" href="https://ianli1023.github.io/Weather-App/">
                            <img className="small-image work-image" src="./public/assets/images/weatherapp.jpg"
                                alt="Weather App Project Screenshot" />

                            <div className="work-text" id="weather-text">
                                <h3 className="work-title">Weather Application</h3>
                                <h4 className="repo-link">
                                    <a target="_blank" className="all-tag"
                                        href="https://github.com/IanLi1023/Weather-App">Code here</a>
                                </h4>
                            </div>
                        </a>
                    </div>

                    <div className="work-flexbox" id="flex-three">
                        <a target="_blank" className="all-tag" href="https://protected-river-51819.herokuapp.com/">
                            <img className="small-image work-image" src="./public/assets/images/notetaker.jpg"
                                alt="Notetaker Project Screenshot" />

                            <div className="work-text" id="note-text">
                                <h3 className="work-title">Note Taker</h3>
                                <h4 className="repo-link">
                                    <a target="_blank" className="all-tag"
                                        href="https://github.com/IanLi1023/NoteTaker_ExpressJS">Code here</a>
                                </h4>
                            </div>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </main>
    );
}

export default MainContent;