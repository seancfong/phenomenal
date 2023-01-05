import '../styles/globals.css'
import '../styles/topography.css'

// preload raleway font
import { Raleway, Orbitron } from '@next/font/google'
import Layout from '../components/Layout'

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway', 
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron', 
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${raleway.variable} ${orbitron.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
