import React from 'react'
import Navbar from '../component/Navbar'
import OurTeam from './OurTeam'
import About from './About'

function Home() {
  return (
    <div>
        <Navbar/>
        <About/>
        <OurTeam/>
    </div>
  )
}

export default Home