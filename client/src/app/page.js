import Image from 'next/image'
import InputComponent from './components/InputComponent'
import Footer from "./components/Footer"
import NavbarComponent from './components/NavbarComponent'


export default function Home() {
  return (
    <div className="container mx-auto">
      <NavbarComponent/>
      <InputComponent />
      <Footer/>
    </div>
  )
}
