import React from 'react';
import github from '../assets/github-icon.png';

function Footer() {
    return (
        <ul className="footer">
          <a href="https://github.com/osuchaya"><img src={github} width="50px" alt="github icon"></img></a>
        
        </ul>
    )
}
export default Footer;