import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class header extends Component {
    render() {
        return (
            <div className=" hero-section center-item" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'absolute', right: '0px', top: 0 }}>
                    <img src="image/IT_Company_Website_Landing_Page_Template.png" alt="" />
                </div>
                <div className="hero-section">
                    <div className="container-fluid flex-bet flex center-item">
                        <div className="hero-section-left">
                            <h1>Advance Innovation For IT Solutions.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra
                                augue.</p>
                            <div className="hero-section-left-button flex">
                                <button>Get In Touch</button>
                                <button>Our Services <i className="fal fa-arrow-down" /></button>
                            </div>
                        </div>
                        <div className="hero-section-right flex center-item">
                            <div className="hero-section-right-image">
                                <img src="image/ca-chep-hoa-rong.jpg" style={{ width: '100%' }} alt="" />
                                <div className="busniess flex">
                                    <div className="image">
                                        <img style={{ borderRadius: '50%' }} src="image/IT_Company_2.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5> Busniess Growth</h5>
                                        <p> Level is high</p>
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
