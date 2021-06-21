import React from 'react'
import HomeItem from './HomeItem'

const HomeListItems = ({clothes}) => {
    return (
        <div className="kenne-content_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shop-toolbar">
                            <div className="product-page_count">
                                <p>Numri Total i produkteve eshte: X</p>
                            </div>
                            <div className="product-item-selection_area">
                                <div className="product-short">
                                    <label className="select-label">Short By:</label>
                                    <select className="nice-select myniceselect">
                                        <option value="1">Default sorting</option>
                                        <option value="2">Name, A to Z</option>
                                        <option value="3">Name, Z to A</option>
                                        <option value="4">Price, low to high</option>
                                        <option value="5">Price, high to low</option>
                                        <option value="5">Rating (Highest)</option>
                                        <option value="5">Rating (Lowest)</option>
                                        <option value="5">Model (A - Z)</option>
                                        <option value="5">Model (Z - A)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="shop-product-wrap grid gridview-3 row">
                            {
                                clothes.map((index, element) => {
                                    return <HomeItem clothe={index} />
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeListItems;