import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {
    imgSrc: string
}

const ProductDesignImage = ({ imgSrc }: Props) => {
  const imageRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "end start"]
	});

	let scale = useTransform(scrollYProgress, [0.2, 0.4, 0.8, 1], ["109%", "100%", "100%", "109%"]);
	let opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ["30%", "80%", "100%", "20%"]);
	let y = useTransform(scrollYProgress, [0.2, 0.4], [-150, 0]);

  return (
    <div ref={imageRef} className="w-full h-full aspect-[2.5] md:aspect-[4/3] md:col-span-2 overflow-hidden rounded-[15px]">
			<motion.img src={imgSrc} alt="Product Design Image" className="w-full h-full object-cover rounded-[15px]" 
				style={{scale, opacity, y}}/> 
    </div>
  )
}

export default ProductDesignImage