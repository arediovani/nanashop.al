import React from 'react'
import Hero from '../component/Hero'
import HomeListItems from '../component/HomeListItems'
const Home = ({clothes}) => {
    return (
        <div>
            <Hero />
            <HomeListItems clothes={clothes}/>
        </div>
    )
}
export default Home