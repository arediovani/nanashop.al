import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Header = () =>{
    return(
        <header className="main-header_area-2">
            <div className="header-middle_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-middle_nav">
                                <div className="header-logo_area">
                                    <Link to="/">
                                        <img src="assets/images/menu/logo/1.png" alt="Header Logo"></img>
                                    </Link>
                               </div>
                                <div className="header-contact d-none d-md-flex">
                                    <i className="fa fa-headphones-alt"></i>
                                    <div className="contact-content">
                                        <p>
                                           Na Kontaktoni 
                                            <br></br>
                                        Free Support: blablabla
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;