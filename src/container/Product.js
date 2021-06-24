import React from 'react'
import NoMatch from './NoMatch';
import { useParams } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
const Product = ({ clothes }) => {
    let { id } = useParams();
    if (clothes.length > 0) {
        let clothe = clothes[id]
        return (
            <div className="sp-area">
                <div className="container">
                    <div className="sp-nav">
                        <div className="row">
                            <div className="col-lg-4">
                                <Carousel>
                                    {clothe.pictures.map((picture,index) => <div key={index}><img src={picture}></img></div>)}
                                </Carousel>
                            </div>
                            <div className="col-lg-8">
                                <div className="sp-content">
                                    <div className="sp-heading">
                                        <h5>{clothe.name}</h5>
                                    </div>
                                    <span className="reference">Referenca: {clothe.id}</span>
                                    <div className="sp-essential_stuff">
                                        <p>{clothe.description}</p>
                                    </div>
                                    <div className="product-size_box">
                                        <span>Madhesia: {clothe.size}</span>
                                    </div>
                                    <div className="kenne-tag-line">
                                        <h6>Tags:</h6>
                                        {
                                            clothe.tags.map((i, e) => {
                                                return <a href="javascript:void(0)">{i}</a>
                                            })
                                        }
                                    </div>
                                    <div className="kenne-social_link">
                                        <ul>
                                            <li className="facebook">
                                                <a href="https://www.facebook.com" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="https://twitter.com" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="https://www.youtube.com" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i className="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="https://rss.com" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <NoMatch />
        )
    }
}
export default Product