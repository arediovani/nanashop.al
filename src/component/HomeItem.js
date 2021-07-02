import React from 'react'
import { Link } from 'react-router-dom'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


const HomeItem = ({ clothe }) => {
    if (clothe.hasOwnProperty('name')) {

        return (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={"/product/" + clothe.id}>
                    <div className="rounded bg-red-50 shadow-lg">
                        <div className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={clothe.pictures[0]} alt={clothe.description}></img>
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-gray-900 title-font text-lg font-medium">{clothe.name}</h3>
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{clothe.category}</h3>
                            <p className="mt-1">{clothe.price + " Lek"}</p>
                        </div>
                    </div>
                </Link >
            </div>

        )
    }

}
export default HomeItem;