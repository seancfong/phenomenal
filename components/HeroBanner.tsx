import Image from 'next/image'
import React, { useRef } from 'react'

import { useInView } from 'framer-motion'

import { IoIosReturnRight } from 'react-icons/io'
import Link from 'next/link'

const HeroBanner = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true })
  
	return (
    <div className="w-full h-[110vh] md:h-[100vh] relative flex flex-col overflow-hidden md:flex-row-reverse md:items-center
		topography-background-pattern" ref={sectionRef}>
			{/* Image div */}
			<div className={"h-[50vh] md:h-[90vh] md:w-[50vw] flex justify-center z-30 md:z-10 md:justify-start transition duration-[1900ms] ease-in-out " 
							+ ( isInView ? "translate-x-0" : "translate-x-[-50vw] rotate-[-10deg] scale-[40%] opacity-10")}>
				{/* Hero Image */}
				<div className="w-[50vh] md:w-[50vw] md:max-w-[70vh] relative self-center ">
					<Image priority src="/phenomenal_hero_image_transparent.png" height={1024} width={1024} alt="hero image"
					className="scale-[140%] md:scale-[170%] lg:scale-[150%] sm:-translate-x-20 md:translate-x-0 translate-y-5 md:-translate-y-5"
					/>
				</div>
			</div>

			{/* Border Box div */}
			<div className="lg:w-[50vw] mr-5 relative flex items-center justify-center sm:justify-end sm:pr-10 text-right mt-[-2vh] mb-[4vh] py-10 backdrop-blur-sm z-10">
				{/* Border box */}
				<div className={`border-[3px] border-gray-600 border-l-transparent rounded-[10px] rounded-tl-none 
					h-full w-[40vw] md:w-[25vw] lg:w-[15vw] absolute right-0 z-0 transition-all duration-[1500ms] ease-in-out ` 
					+ ( isInView ? "" : "w-[0px] h-0 border-gray-300")}/>
				<div className={`border-[3px] border-gray-600 border-b-transparent border-l-transparent rounded-[10px] rounded-tl-none 
					h-full w-[40vw] max-w-[50rem] absolute right-0 z-0 transition-all duration-[1500ms] ease-in-out ` 
					+ ( isInView ? "" : "w-[0px] h-0 border-gray-300")}/>
				{/* Text section */}
				<div className="w-[90%] max-w-lg flex flex-col gap-3 items-end z-30">
					<h2
						className={"font-orbitron font-regular text-3xl lg:text-4xl xl:text-5xl tracking-wide transition duration-[1000ms] delay-[400ms] ease-in-out " 
							+ ( isInView ? "translate-y-0" : "translate-y-[20px] opacity-0")}>
						We think <span className="line-through">&nbsp;outside&nbsp;</span><br />inside the box.
					</h2>

					<div className="flex flex-col gap-3 font-raleway text-sm sm:text-lg lg:text-xl">
						<p className={"transition duration-[1000ms] delay-[550ms] ease-in-out " 
							+ ( isInView ? "translate-y-0" : "translate-y-[20px] opacity-0")}>
							Upgrade your workspace by showcasing something 
							phenomenal with our selection of custom PC cases.
						</p>
						
						<p className={"transition duration-[1000ms] delay-[700ms] ease-in-out " 
							+ ( isInView ? "translate-y-0" : "translate-y-[20px] opacity-0")}>
							We are committed to sustainability.
							All of our cases are refurbished from recycled PC's
							and redesigned with the goal of maintaining the perfect
							living environment for anything you choose. 
						</p>
						
					</div>

					{/* Leaves button */}
					<button className={"bg-[url('/images/leaves.jpg')] bg-center w-[80%] max-w-xs sm:w-[100%] h-[3rem] relative rounded-xl overflow-hidden transition duration-[1000ms] delay-[950ms] ease-in-out " 
							+ ( isInView ? "translate-y-0" : "translate-y-[20px] opacity-0" )}>
						<Link 
							href="#explore"
							scroll={false}
							className="h-full flex flex-row items-center justify-end gap-3 pr-5
							bg-gradient-to-r from-[rgba(175,134,9,0.3)] to-[rgba(46,66,51,0.7)]">
							<span className="text-white font-raleway text-xl">explore now</span>
							<IoIosReturnRight size={30} color="#EEEEEE"/>
						</Link>
					</button>
				</div>	
			</div>

			{/* Background text div */}
			<div className="absolute top-1/2 left-1/2 whitespace-nowrap">
				<div className="flex flex-col font-orbitron text-gray-800 font-bold opacity-[4%] text-8xl lg:text-9xl 
				translate-x-[-50%] lg:translate-x-[-40%] translate-y-[-70%] lg:translate-y-[-60%]">
					{/* top */}
					<span className={"transition duration-[5000ms] delay-[300ms] ease-[cubic-bezier(0,1.14,.33,.99)] " 
							+ ( isInView ? "translate-x-0" : "translate-x-[200vw] opacity-0")}>
						{["phenomenal".repeat(7)].map((item) => item)}
					</span> 
					{/* middle */}
					<span className={"transition duration-[5000ms] delay-[300ms] ease-[cubic-bezier(0,1.14,.33,.99)] " 
							+ ( isInView ? "translate-x-0" : "translate-x-[-200vw] opacity-0")}>
						{["henomenalp".repeat(7)].map((item) => item)}
					</span> 
					 {/* bottom */}
					 <span className={"transition duration-[5000ms] delay-[300ms] ease-[cubic-bezier(0,1.14,.33,.99)] " 
							+ ( isInView ? "translate-x-0" : "translate-x-[200vw] opacity-0")}>
						{["enomenalph".repeat(7)].map((item) => item)}
					</span> 
				</div>
			</div>

		</div>

  )
}

export default HeroBanner