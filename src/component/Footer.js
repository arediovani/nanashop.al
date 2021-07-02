import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <a id="header_logo" className="text-2xl text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Nana Shop</a>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 -
                    <a href="https://github.com/arediovani" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Github Aredio Vani</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://www.instagram.com/nanashop.al/">
                            <FaInstagram />
                        </a>
                </span>
            </div>
        </footer>
    )
}
export default Footer;