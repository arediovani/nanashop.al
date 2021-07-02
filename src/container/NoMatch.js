import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div className="nomatch">
            <div className="gradient text-white min-h-screen flex items-center">
                <div className="container mx-auto p-4 flex flex-wrap items-center">
                    <div className="w-full md:w-5/12 text-center p-4">
                        <img src="https://themichailov.com/img/not-found.svg" alt="Not Found" />
                    </div>
                    <div className="w-full md:w-7/12 text-center md:text-left p-4">
                        <div className="text-6xl font-medium">404</div>
                        <div className="text-xl md:text-3xl font-medium mb-4">
                       Faqja qe ju po kerkoni nuk ekziston! 
                        </div>
                        <div className="text-lg mb-8">
                            Ju lutem klikoni kthehuni ne faqen kryesore
                        </div>
                        <Link to="/">
                            <button className="border border-white rounder p-4">Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoMatch;