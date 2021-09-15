import React from 'react'
import {Link} from "react-router-dom";
import img2 from './/newspaper.png'
// import GoogleFontLoader from 'react-google-font-loader';
// <link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&family=Prompt:wght@300&display=swap" rel="stylesheet"></link>
import './style.css'
// export class NavBar extends Component {
const NavBar=()=>{

  // render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
          <div className="container-fluid" style={{fontFamily: "'Permanent Marker', cursive"}}>
            <img src={img2} alt="" srcset="" style={{height:"40px", width: "40px", margin: '-6px 17px' , filter: "invert(100%)"}} />
            <Link className="navbar-brand" to="/">NewsFeed</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/Business">Business</Link></li>
               <li className="nav-item">
                  <Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
               <li className="nav-item">
                  <Link className="nav-link" to="/General">General</Link></li>
               <li className="nav-item">
                  <Link className="nav-link" to="/Health">Health</Link></li>
               <li className="nav-item">
                  <Link className="nav-link" to="/Science">Science</Link></li>
               <li className="nav-item">
                  <Link className="nav-link" to="/Sports">Sports</Link></li>
               <li className="nav-item">
                  <Link className="nav-link" to="/Technology">Technology</Link></li>
                  {/* <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li> */}

              </ul>
            </div>
          </div>
        </nav>

      </div>
     )
  // }
}

export default NavBar
