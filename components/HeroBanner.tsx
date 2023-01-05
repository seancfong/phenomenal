import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className="w-full h-[110vh] md:h-[100vh] relative flex flex-col overflow-hidden md:flex-row-reverse md:items-center
		topography-background-pattern">
			{/* Image div */}
			<div className="h-[50vh] md:h-[90vh] md:w-[50vw] flex justify-center md:justify-start">
				{/* Hero Image */}
				<div className="w-[50vh] md:w-[50vw] md:max-w-[70vh] relative z-30 md:z-10 self-center ">
					<Image priority src="/phenomenal_hero_image_transparent.png" height={1024} width={1024} alt="hero image"
					className="scale-[140%] md:scale-[170%] lg:scale-[150%] sm:-translate-x-20 md:translate-x-0 translate-y-5 md:-translate-y-5"
					/>
				</div>
			</div>

			{/* Border Box div */}
			<div className="lg:w-[50vw] mr-5 relative flex items-center justify-center sm:justify-end sm:pr-10 text-right mt-[-2vh] mb-[4vh] py-10 backdrop-blur-sm z-10">
				{/* Border box */}
				<div className="border-[3px] border-gray-600 border-opacity-50 border-l-[rgba(0,0,0,0)] rounded-[10px] h-full w-[100vw] absolute right-0 z-0"/>

				{/* Text section */}
				<div className="w-[90%] max-w-lg flex flex-col gap-3 items-end z-30">
					<h2 className="font-orbitron font-regular text-3xl lg:text-4xl xl:text-5xl tracking-wide">
						We think <span className="line-through">&nbsp;outside&nbsp;</span><br />inside the box.
					</h2>

					<p className="font-raleway text-sm sm:text-lg lg:text-xl">
						Upgrade your workspace by growing something 
						phenomenal with our selection of custom PC cases.
						<br /> <br />
						We are committed to sustainability.
						All of our cases are refurbished from recycled PC's
						and redesigned with the goal of maintaining the perfect
						living environment for anything you choose. 
					</p>

					{/* Leaves button */}
					<button className="bg-[url('/leaves.jpg')] bg-center w-[80%] max-w-xs sm:w-[100%] h-[3rem] relative rounded-xl overflow-hidden">
						<div 
							className="h-full flex flex-row items-center justify-end 
							bg-gradient-to-r from-[rgba(175,134,9,0.3)] to-[rgba(46,66,51,0.7)]">
							<span className="text-white font-raleway text-xl">explore now {'>>'} &nbsp;</span>
						</div>
					</button>
				</div>	
			</div>

			{/* Background text div */}
			<div className="absolute top-1/2 left-1/2 whitespace-nowrap">
				<h2 className="inline-block font-orbitron text-gray-800 font-bold opacity-[4%] text-8xl lg:text-9xl 
				translate-x-[-50%] lg:translate-x-[-40%] translate-y-[-70%] lg:translate-y-[-60%] text-center">
					phenomenalphenomenalphenomenal <br />
					henomenalphenomenalphenomenalp <br />
					enomenalphenomenalphenomenalph <br />
				</h2>
			</div>

		</div>

  )
}

export default HeroBanner