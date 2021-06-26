import React from 'react'
import HomeItem from './HomeItem'

const HomeListItems = ({ clothes }) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        clothes.map((index, element) => {
                            return <HomeItem clothe={index} />
                        }
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default HomeListItems;