import React from 'react'

import { Product, FooterBanner, HeroBanner, ProductDiscovery } from '../components'
import { client } from '../lib/client'

const Home = ({ products }) => {
  return (
    <div className="bg-[#eeeeee]">
      {/* Hero banner section */}
      <HeroBanner />

      {/* <div className="w-full h-[30vh] bg-slate-200 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold font-raleway">
          Best selling products
        </h2>
        <p>Something about keyboards</p>
      </div> */}  
      
      {/* Product discovery section */}
      <ProductDiscovery products={products}/>
    
      {/* <FooterBanner /> */}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"] {
    image, name, price, details, collection, _id, slug
  }`;
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home
