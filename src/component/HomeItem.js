import React from 'react'
import {Link} from 'react-router-dom'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


const HomeItem = ({ clothe }) => {
    if (clothe.hasOwnProperty('name')) {

        return (
                <div className="col-lg-4 col-md-4 col-sm-6">
            <Link to={"/product/" + clothe.id}>
                    <div className="product-item">
                        <div className="single-product">
                            <div className="product-img">
                                <a href="single-product.html">
                                    <img className="primary-img" src={clothe.pictures[0]} alt={clothe.description}></img>
                                </a>
                            </div>
                            <div className="product-content">
                                <div className="product-desc_info">
                                    <h3 className="product-name"><a href="single-product.html">{clothe.name}</a></h3>
                                    <div className="price-box">
                                        <span className="new-price">{clothe.price + " Lek"}</span>
                                    </div>
                                    <div className="old-price">
                                        {"Madhesia: " + clothe.size}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Link>
                </div>
        )
    }

}
export default HomeItem;