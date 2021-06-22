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
                            <div className="col-lg-5">
                                <Carousel>
                                    {clothe.pictures.map((picture, index) => <img key={index} src={picture}></img>)}
                                </Carousel>
                            </div>
                            <div className="col-lg-7">
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

                                    <div className="social-links">
                                        <ul>
                                            <li className="whatsapp">
                                                <a href={"https://wa.me/+355693300032?text=Pershendetje jam i interesuar per produktin me emrin " + clothe.name + " dhe me id " + clothe.id} >
                                                    <i className="fab fa-whatsapp"></i>
                                                    <span className="social-span">
                                                        Porosit me Whatsapp
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="viber">
                                                <a href="viber://add?number=355693300032" >
                                                    <i className="fab fa-viber"></i>
                                                    <span className="social-span">
                                                        Porosit me Viber
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="phone">
                                                <a href="tel:355693300032" >
                                                    <i class="fas fa-phone"></i>
                                                    <span className="social-span">
                                                        Porosit me telefon
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="email">
                                                <a href="mailto:nanashop60@gmail.com" >
                                                    <i class="fas fa-envelope-open-text"></i>
                                                    <span className="social-span">
                                                        Dergoni nje email
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tags">
                                        <a>Tags:</a>
                                        {
                                            clothe.tags.map((i, e) => {
                                                return <a >{i}</a>
                                            })
                                        }
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