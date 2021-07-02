import React from 'react'
import { FaInstagram } from "react-icons/fa"
import {
    Link
} from "react-router-dom";
const Header = () => {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto items-baseline">
                <div className="flex justify-between mt-6  lg:mt-0 lg:-mx-2">
                    <Link to="/">
                        <div id="header_logo" className="text-2xl text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Nana Shop</div>
                    </Link>
                    <div className="flex justify-start text-pink-500 hover:text-pink-200 transition-opacity align-bottom align text-2xl">
                        <a href="https://www.instagram.com/nanashop.al/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;