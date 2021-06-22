import React from 'react'
import HomeItem from './HomeItem'

const HomeListItems = ({ clothes }) => {
    return (
        <div className="kenne-content_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shop-toolbar">
                            <div className="product-page_count">
                                <p>Numri Total i produkteve eshte: {clothes.length}</p>
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