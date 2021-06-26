import React from 'react'
import Hero from '../component/Hero'
import HomeListItems from '../component/HomeListItems'
import Filters from './Filters'
const Home = ({ clothes, categories }) => {
    return (
        <div>
            <Hero />
            <Filters categories={categories}/>
            <HomeListItems clothes={clothes} />
        </div>
    )
}
export default Home