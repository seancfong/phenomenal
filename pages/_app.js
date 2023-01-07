import '../styles/globals.css'
import '../styles/topography.css'

// preload raleway font
import { Raleway, Orbitron } from '@next/font/google'

// other imports
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

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
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </main>
  )
}
