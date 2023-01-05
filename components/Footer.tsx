import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
			<p className="font-raleway text-center">&copy; Sean Collan Fong {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer