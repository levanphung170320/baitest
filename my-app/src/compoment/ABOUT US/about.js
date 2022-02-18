import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <div className="about-us">
                <img src="image/IT_Company_4.png" alt="" />
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="wrap-about">
                                <div className="wrap-about-image">
                                    <img src="image/IT_Company_5.png" alt="" />
                                    <div className="slide-about">
                                        <div className="swiper-container carousel">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="slider-item">
                                                        <div className="sl-about">
                                                            <img src="image/IT_Company_3.png" alt="" />
                                                            <p>Lorem ipsum dol sit amet, consec adipiscing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="slider-item">
                                                        <div className="sl-about">
                                                            <img src="image/IT_Company_3.png" alt="" />
                                                            <p>Lorem ipsum dol sit amet, consec adipiscing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-services ">
                                <h1>We are the solution for IT problems</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie faucibus cras donec consequat
                                    urna. Mauris malesuada viverra nibh convallis consectetur adipiscing vitae.</p>
                                <div className="hero-section-left-button flex">
                                    <button>More About</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
