import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container-fluid flex flex-bet header-menu">
                        <div className="logo center-item flex">
                            <img src="image/LOGO.png" alt="" />
                        </div>
                        <nav className="menu ">
                            <ul className="flex">
                                <li>
                                    <a href="#"> Home </a>
                                </li>
                                <li>
                                    <a href="#"> About </a>
                                </li>
                                <li>
                                    <a href="#"> Services </a>
                                </li>
                                <li>
                                    <a href="#"> Portofolio </a>
                                </li>
                                <li>
                                    <a href="#"> Testimony </a>
                                </li>
                                <li>
                                    <a href="#"> News </a>
                                </li>
                                <li>
                                    <a href="#"> Contact </a>
                                </li>
                                <li>
                                    <a href="#"> Get A Quote </a>
                                </li>
                                <li>
                                    <span> <i className="far fa-search" /> </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
