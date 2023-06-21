import React from 'react';
import user from '../../../assets/user.png';
import './Menu.css'
const Menu = () => {
    return (
        <div className='container mt-5'>
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">All Post(32)</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Article</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Job</a>
                        </li>
                    </ul>
                </div>
                <div className="p-2 nav-pills">
                    <ul className="nav">
                        <li className="nav-item me-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Write a Post</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#"> <img src={user} alt="" /> Join Group</a>

                        </li>
                    </ul>
                </div>
            </div>
            <div className="divider-container">
                <div className="black-div"></div> {/* Black div */}
                <div className="gray-div"></div> {/* Gray div */}
            </div>
        </div>
    );
};

export default Menu;