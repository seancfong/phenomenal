import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <div className="bg-[#eeeeee]">
      <HeroBanner />

      {/* <div className="w-full h-[30vh] bg-slate-200 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold font-raleway">
          Best selling products
        </h2>
        <p>Something about keyboards</p>
      </div> */}

      {/* Product container */}
      <div className="flex justify-center">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 md:gap-10 px-[5vw] sm:px-[20vw] md:px-[5vw] lg: px-[10vw]max-w-[1600px] overflow-x-hidden">
          { products?.map((product) => 
            <Product key={product._id} product={product} /> 
          ) }
        </div>
      </div>
    
      {/* <FooterBanner /> */}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home
