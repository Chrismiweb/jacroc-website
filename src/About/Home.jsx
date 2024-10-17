import React from 'react'
import Navbar from '../component/Navbar'
import OurTeam from './OurTeam'
import About from './About'
import Hero from './Hero'
import Approach from './Approach'
import PowerBrand from './PowerBrand'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <OurTeam/>
        <Approach/>
        <PowerBrand/>
    </div>
  )
}

export default Home