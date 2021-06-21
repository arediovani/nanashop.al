import react from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div className="error-content_wrapper">
            <div className="error-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 text-center">
                            <div className="error">
                                <h1>404</h1>
                                <h2>Upps!? Faqja qe ju kerkoni nuk ekziston</h2>
                                <p>Ju lutemi te rektheheni ne faqen kryesore</p>
                                <Link to="/">
                                    <a className="btn">Kthehu prapa</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoMatch;