import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='row justify-content-md-center'>
                <div className='bg col-12 col-md-6'></div>
                <div className='col-12 col-md-6 computer-text position-absolute' >
                    <h3>Computer Engineering</h3>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
