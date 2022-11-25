import Head from 'next/head'
import Image from 'next/image'
import { Navbar, About, Header, Work, Skills, Footer} from '../components'


export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}
