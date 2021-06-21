import React from 'react'

const Header = () =>{
    return(
        <header class="main-header_area-2">
            <div class="header-middle_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-middle_nav">
                                <div class="header-logo_area">
                                    <a href="index.html">
                                        <img src="assets/images/menu/logo/1.png" alt="Header Logo"></img>
                                    </a>
                                </div>
                                <div class="header-contact d-none d-md-flex">
                                    <i class="fa fa-headphones-alt"></i>
                                    <div class="contact-content">
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