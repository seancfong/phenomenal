import React, { useEffect, useRef } from 'react'

import { client, urlFor } from '../../lib/client'
import { ProductDescription, ProductFeatures, ProductSolution } from '../../components/ProductDetails';
import { renderBackgroundPattern } from '../../helpers/renderCollectionColors'
import ProductDesign from '../../components/ProductDetails/ProductDesign';
import ProductReviews from '../../components/ProductDetails/ProductReviews';
import { useStateContext } from '../../context/StateContext'
import { motion, useAnimationControls, useInView, useScroll, Variants } from 'framer-motion';
import ProductRelated from '../../components/ProductDetails/ProductRelated';
import { AiOutlineArrowUp } from 'react-icons/ai'
import { NextSeo } from 'next-seo';

export interface IReviewStats {
	avgReview: number,
	numReviews: number
}

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProductDetails = ({ product, reviewStats }) => {
  console.log(product.relatedProducts);

  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const { image, name, price, details, collection, features, _id, slug, productSolution, relatedProducts } = product;
	const { incQty, decQty, qty, onAdd } = useStateContext();

	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef);

  const { scrollYProgress } = useScroll();
  const scrollControl = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
        if (latestValue > 0.5) {
            scrollControl.start('show');
        } else {
            scrollControl.start('hide');
        }
    });
});

	return (
		<div ref={sectionRef} className={"pb-10 w-full flex flex-col bg-[#eeeeee] items-center justify-center gap-10 " + renderBackgroundPattern(collection)}>
			<NextSeo
        title={`${name} | phenomenal`}
      />
      
      {/* Top grid */}
			<div className="grid items-start grid-rows-[auto_auto_1fr] grid-cols-[minmax(0,80vw)] md:grid-cols-[3fr_2fr] 
				gap-5 px-5 md:px-10 max-w-7xl">
				{/* Image container */}
				<div className={`row-span-1 border-[3px] border-gray-600 border-opacity-50 rounded-[15px] 
					overflow-hidden justify-self-end self-stretch transition duration-[800ms] ease-in-out ` + ( isInView ? "" : "opacity-50 scale-[98%]")}>
					<motion.img src={urlFor(image && image[0])} alt="product image" width={1024} height={1024}
					whileHover={{ scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="h-full w-full object-cover"/>
				</div>

				{/* Right side */}
				<div className="row-span-2 self-stretch">
					<div className="flex flex-col sticky top-10 gap-5">
						{/* Product description container */}
						<ProductDescription 
							isInView={isInView}
							name={name} 
							price={price} 
							collection={collection} 
							details={details} 
							reviewStats={reviewStats}
							incQty={incQty}
							decQty={decQty}
							qty={qty}
							onAdd={() => onAdd(product={
								name, price, _id, image
							}, qty)}
						/>
						
						{/* Features description container */}
						<ProductFeatures features={features} isInView={isInView}/>
					</div>
				</div>				
					
				{/* Solution container */}
				<ProductSolution designSolutionDescription={productSolution} isInView={isInView} />

			</div>

			{/* Section break */}
			<hr className="w-1/4 h-[2px] border-0 bg-gray-600 bg-opacity-20 md:col-span-2"/>

			{/* Product collection design */}
			<div className="grid items-start grid-cols-[minmax(0,80vw)] md:grid-cols-[2fr_1fr_2fr] grid-flow-row-dense
				gap-5 md:gap-y-20 px-5 md:px-10 max-w-7xl">
				<ProductDesign collection={collection}/>
			</div>

			{/* Section break */}
			<hr className="w-1/4 h-[2px] border-0 bg-gray-600 bg-opacity-20 md:col-span-2"/>

			<div className="grid items-start w-full grid-cols-[minmax(0,80vw)] md:grid-cols-[2fr_3fr] 
				gap-5 px-5 md:px-10 max-w-7xl justify-center">
				<ProductReviews slug={slug} reviewStats={reviewStats} />
			</div>

			<div className="flex justify-center w-full gap-5 px-5 md:px-10 max-w-7xl">
				<ProductRelated relatedProducts={relatedProducts} collection={collection}/>
			</div>

      <motion.button
        className="fixed bottom-0 right-0 p-10"
        variants={ScrollToTopContainerVariants}
        initial="hide"
        animate={scrollControl}
        onClick={scrollToTop}>
        <AiOutlineArrowUp size={30} color="#777777"/>
      </motion.button>
		</div>
  )
}

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
		slug {
			current
		}
	}`

	const products = await client.fetch(query);

	const paths = products.map((product) => ({ 
		params: { 
			slug: product.slug.current
		}
	}))

	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps = async ({ params: { slug }}) => {
	// SSR relevant content: product details, solution header, basic review stats
	const query = `*[_type == "product" && slug.current == '${slug}'][0] {
			image, name, price, details, collection, features, _id, 
			"slug": slug.current,
			"productSolution": *[_type == "productDesign" && collection == ^.collection][0] {
				solutionDescription, solutionHeader, collection
			},
      "relatedProducts": *[_type == "product" && slug.current != '${slug}' && collection == ^.collection] {
        image, name, price, details, collection, features, _id, slug
      }
	}`;

	const reviewQuery = `{
		"avgReview": math::avg(*[_type == "product" && slug.current == '${slug}'][0]
			.reviews[].rating
		),
		"numReviews": length(*[_type == "product" && slug.current == '${slug}'][0]
			.reviews[]
		),
	}`;

	const product = await client.fetch(query);
	const reviewStats = await client.fetch(reviewQuery);

  return {
    props: { product, reviewStats }
  }
}

export default ProductDetails