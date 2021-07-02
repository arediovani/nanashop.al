import React from 'react'
import HomeItem from './HomeItem'

const HomeListItems = ({ clothes }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        clothes.map((index, element) => {
                            return <HomeItem key={element} clothe={index} />
                        }
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default HomeListItems;