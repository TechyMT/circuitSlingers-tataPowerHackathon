import Image from 'next/image'
import InputComponent from './components/InputComponent'
import Footer from "./components/Footer"
import NavbarComponent from './components/NavbarComponent'
import Hero from './components/Hero'
import SolarInfo from './components/SolarInfo'
import YouTubePlayer from './components/YoutubePlayer'
import Collaboration from './components/Collaboration'


export default function Home() {
  return (
    <div className="container mx-auto">
      <NavbarComponent/>
      <Hero />
      <div>
        <div className='h1 text-4xl flex justify-center pb-10 text-bold'>Impacts of Solar Energy</div>
        <SolarInfo/>
      </div> 
      <div>
      <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
      <YouTubePlayer videoId="EG4KHwZut0o" />
        </div>
        <Collaboration/>
      </div>
      <Footer/>
      </div>
  )
}
