import React, { useState } from 'react';
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title diffTitle">Projects</h2>
            <div className="projects__container container grid">
                
                {/* Project 1: Chatterbox */}
                <div className="project__content">
                    <div>
                        <i className='bx bx-chat services__icon'></i>
                        <h3 className="project__title">Chatterbox <br /> (Social Media App)</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            {/* Close button */}
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="project__modal-title">Chatterbox</h3>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>User Creation:</b> Users can create accounts and manage profiles.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Real-time Chat:</b> Facilitates instant messaging between users.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Comment Management:</b> Users can post comments and interact with each other.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2: Image Segmentation */}
                <div className="project__content">
                    <div>
                        <i className='bx bx-image services__icon'></i>
                        <h3 className="project__title">Image Segmentation <br /> (Using Coresets)</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="project__modal-title">Image Segmentation</h3>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Efficient Segmentation:</b> Utilizes coresets to enhance segmentation accuracy.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Real-world Applications:</b> Applicable in various fields like medical imaging and autonomous driving.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 3: AI-based Traffic Management */}
                <div className="project__content">
                    <div>
                        <i className='bx bx-traffic-light services__icon'></i>
                        <h3 className="project__title">AI-based Traffic Management</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="project__modal-title">AI-based Traffic Management System</h3>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Dynamic Traffic Control:</b> Optimizes traffic flow using real-time data analysis.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Car Counting:</b> Implements YOLO for accurate car counting and light optimization.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
