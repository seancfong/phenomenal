import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center h-[8vh] bg-[#eeeeee] relative">
			<h1 className="font-orbitron text-xl sm:text-3xl tracking-wide">
				phenomenal
			</h1>
			<p className="font-orbitron text-gray-500 absolute right-5 text-right">
				[0]
			</p>
    </div>
  )
}

export default Navbar