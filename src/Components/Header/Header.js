import React from "react";
import './Header.css';
import image from '../../assets/spotimix-logo.png'
class Header extends React.Component {
    render() {
        const jsx = (
            <div className='Header'>
                <img src={image} alt="logo" />
            </div>
        );
        return jsx;
    }
}

export default Header;