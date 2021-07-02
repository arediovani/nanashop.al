import React from 'react'
import Hero from '../component/Hero'
import HomeListItems from '../component/HomeListItems'
import Filters from './Filters'
const Home = ({ clothes, categories, filterChange,orderChange}) => {
    return (
        <div>
            <Hero />
            <Filters categories={categories} filterChange={filterChange} orderChange={orderChange}/>
            <HomeListItems clothes={clothes} />
        </div>
    )
}
export default Home