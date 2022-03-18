import React from 'react';
import '../Work/Work.css';

function Work() {
    return (

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
    );
}

export default Work;