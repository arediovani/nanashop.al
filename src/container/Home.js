import React from 'react'
import Hero from '../component/Hero'
import HomeListItems from '../component/HomeListItems'
import Filters from './Filters'
const Home = ({ clothes, categories, filterChange}) => {
    return (
        <div>
            <Hero />
            <Filters categories={categories} filterChange={filterChange}/>
            <HomeListItems clothes={clothes} />
        </div>
    )
}
export default Home