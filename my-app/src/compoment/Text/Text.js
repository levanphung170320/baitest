import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Text extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="container-fluid ">
                    <div className="top-bar-inner flex flex-bet">
                        <div className="top-contact flex">
                            <div className="addres">
                                <i className="fas fa-envelope" />
                                <span>info@webmail.com</span>
                            </div>
                            <div className="phone">
                                <i className="fas fa-phone-alt" />
                                <span>+987 8762 866 82</span>
                            </div>
                        </div>
                        <div className="top-right flex">
                            <ul className="social flex">
                                <li>
                                    <i className="fab fa-facebook-square" />
                                </li>
                                <li>
                                    <i className="fab fa-twitter-square" />
                                </li>
                                <li>
                                    <i className="fab fa-instagram" />
                                </li>
                            </ul>
                            <div className="language">
                                <select>
                                    <option selected>English</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
