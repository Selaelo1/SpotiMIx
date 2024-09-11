import React from "react";
import './Footer.css';
class Footer extends React.Component {
    render() {
        const jsx = (
            <div className='Footer'>
                <p>Made with <i className="fas fa-heart"></i> by <a href='https://github.com/Selaelo1/Selaelo'>Selaelo Langa</a></p>
            </div>
        );
        return jsx;
    }
}

export default Footer;