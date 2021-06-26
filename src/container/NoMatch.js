import react from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div class="nomatch">
            <div class="gradient text-white min-h-screen flex items-center">
                <div class="container mx-auto p-4 flex flex-wrap items-center">
                    <div class="w-full md:w-5/12 text-center p-4">
                        <img src="https://themichailov.com/img/not-found.svg" alt="Not Found" />
                    </div>
                    <div class="w-full md:w-7/12 text-center md:text-left p-4">
                        <div class="text-6xl font-medium">404</div>
                        <div class="text-xl md:text-3xl font-medium mb-4">
                       Faqja qe ju po kerkoni nuk ekziston! 
                        </div>
                        <div class="text-lg mb-8">
                            Ju lutem klikoni kthehuni ne faqen kryesore
                        </div>
                        <Link to="/">
                            <button class="border border-white rounder p-4">Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoMatch;