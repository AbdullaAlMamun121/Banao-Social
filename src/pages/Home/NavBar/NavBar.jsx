import React from 'react';
import logo from '../../../assets/logo.png'
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="Container text-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row " id="navbarTogglerDemo01">
                        <div className='col col-md-4 col-lg-4'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='col col-md-4 col-lg-4'>
                            <form className="d-flex " role="search">
                                <input className="form-control me-2  rounded-5 w-75" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />

                            </form>
                        </div>
                        <div className="dropdown col col-md-4 col-lg-4">
                            <span>Create account</span>
                            <a className="dropdown-toggle text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                                It's Free!
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" >Sign In</a></li>

                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;