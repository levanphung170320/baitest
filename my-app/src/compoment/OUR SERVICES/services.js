import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <div className="our-services ">
                <div className="container-fluid flex flex-bet center-item section">
                    <div className="in-services row center-item">
                        <div className="col-sm-12 col-lg-12 col-md-12">
                            <h2 className="heading">Our Services For Technology You Needs</h2>
                            <div className="hero-section-left-button flex">
                                <button>Get In Touch</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-12 col-md-12">
                            <div className="flex m-l-30 flex-wrap  ">
                                <div className="service-box">
                                    <div className="image">
                                        <img src="image/icon1.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            Cyber Security
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="service-box">
                                    <div className="image">
                                        <img src="image/icon1.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            Cyber Security
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="service-box">
                                    <div className="image">
                                        <img src="image/icon1.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            Cyber Security
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                                <div className="service-box">
                                    <div className="image">
                                        <img src="image/icon1.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">
                                            Cyber Security
                                        </h4>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
