import React from "react";
import img1 from '../assets/img1.png';
export default function Navbar(props){
    return(
        <header>
        <nav className= {props.darkMode ? "dark" : "light"}>
          <img 
          className="nav--logo icon"
        src={img1} width="60px" alt="Description of img1" />
          <h3>React fact</h3>
          <div className="toggler">
            <p className="toggle---light">Light</p>
            <div className="toggle--slider" 
            onClick={props.toggleDarkMode}>__
                <div className="toggle--slider--circle"></div>
            </div> <p className=" toggle--dark">Dark</p>
          </div>
          </nav>
          </header>
    )
}

