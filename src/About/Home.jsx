import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import OurTeam from './OurTeam'
import About from './About'
import Hero from './Hero'
import Approach from './Approach'
import PowerBrand from './PowerBrand'
import CaseStudy from './CaseStudy'
import Service from './Service'
import Brand from './Brand'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <OurTeam/>
        <Approach/>
        <PowerBrand/>
        <CaseStudy/>
        <Service/>
        <Brand/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home