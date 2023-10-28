import Image from 'next/image';
import InputComponent from './components/InputComponent';
import Footer from "./components/Footer";
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import SolarInfo from './components/SolarInfo';
import cover from "../../public/images/cover.gif";
import Player from "./components/YoutubePlayer";
import Collaboration from './components/Collaboration';


export default function Home()
{
  return (
    <div className="container mx-auto">
      <NavbarComponent />
      <div>
        <Hero />
        <SolarInfo />
        <div className='flex justify-center p-8'>
          <Player />
        </div>
        <Collaboration />
      </div>
      <Footer />
    </div>
  );
}
