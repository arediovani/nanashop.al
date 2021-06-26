import React from 'react'
import NoMatch from './NoMatch';
import { useParams } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
const Product = ({ clothes }) => {
    let { id } = useParams();
    if (clothes.length > 0) {
        let clothe = clothes[id]
        return (
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex-wrap">
                        <div class="grid 2xl:grid-cols-2 md:grid-flow-row">
                        <Carousel class=" lg:w-1/2 lg:h-auto h-64 object-cover object-center rounded">
                            {clothe.pictures.map((picture, index) => <div key={index}><img src={picture}></img></div>)}
                        </Carousel>
                        <div class=" lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">Nana Shop Exclusive</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{clothe.name}</h1>
                            <p class="leading-relaxed">{clothe.description}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div class="flex">
                                    <span class="mr-3">Ngjyra: </span>
                                    <h4 class="border-gray-700">{clothe.color}</h4>
                                </div>
                                <div class="flex ml-6 items-center">
                                    <span class="mr-3">Madhesite:</span>
                                    {
                                        clothe.size.map(e => {
                                            return <span> <h3 class="pr-3 text-gray-800"> {e + " "}</h3></span>
                                        })
                                    }
                                </div>
                            </div>
                                <h2 class="title-font font-medium text-2xl text-gray-900">{clothe.price + " Lek"}</h2>
                            <div class="flex flex-col">
                                <h1>Porosit duke na kontaktuar ne kto menyra:</h1>
                                <a href={"https://wa.me/+355693300032?text=Pershendetje jam i interesuar per produktin" + clothe.name + " " + "me id:" + clothe.id}>
                                    <button class="m-2 ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-200 hover:text-black transition-all duration-100 rounded">Blije me Whatsapp</button>
                                </a>
                                <a href={"viber://add?number=355693300032"}>
                                   <button class="m-2 ml-auto text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-200 hover:text-black transition-all duration-100 rounded">Blije me Viber</button>
                                </a>
                                <a href="tel:355693300032">
                                    <button class="m-2 ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 hover:text-black transition-all duration-100 rounded">Telefono</button>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <NoMatch />
        )
    }
}
export default Product