import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import BannerBrain from '../components/Banner/BannerBrain';
import BannerTab from '../components/Banner/BannerTab';
import BannerWatch from '../components/Banner/BannerWatch';
import BannerAccesories from '../components/Banner/BannerAccesories';
import SectionPhones from '../components/SectionPhones';
import SectionBooks from '../components/SectionBooks';
import SectionWatches from '../components/SectionWatches';
import SectionTablets from '../components/SectionTablets';
import SectionAccessories from '../components/SectionAccessories';
import Footer from '../components/Footer';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log('toggle')
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Banner />
      <SectionPhones />
      <BannerBrain />
      <SectionBooks />
      <BannerWatch />
      <SectionWatches />
      <BannerTab />
      <SectionTablets />
      <BannerAccesories />
      <SectionAccessories />
      <Footer />
    </>
  )
}

export default Home;
