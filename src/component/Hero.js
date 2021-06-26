import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
    return (
        <div id="hero" class="w-full bg-center bg-cover h-128" >
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div class="text-center">
                    <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Gjithcka e rrotulluar rreth <span class="text-yellow-400 ">shijes tende!</span></h1>
                        <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-transparent rounded-md lg:w-auto border-pink-500 border-2 focus:outline-none focus:bg-blue-500">
                            Shiko Produktet
                        </button>
                </div>
            </div>
        </div>
    )
}
export default Hero