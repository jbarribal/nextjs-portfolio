import Head from 'next/head'
import Image from 'next/image'
import { Navbar, About, Header, Work, Skills} from '../components'


export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </div>
  )
}
