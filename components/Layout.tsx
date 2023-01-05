import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
			<Head>
				<title>phenomenal</title>
			</Head>
			<header>
				<Navbar />
			</header>
      <main>
				{children}
			</main>
      <footer>
				<Footer />
			</footer>
			
    </>
  )
}