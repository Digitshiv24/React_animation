import React from 'react'
import Navbar from './Navbar/Navbar';
import Heading from "./Header/Heading"
import Footer from './Footer/Footer';
import Partners from  './Partners/Partners'

export default function Main() {
  return (
    <div>
        <Navbar/>
        <Heading/>
        <Partners/>
        <Footer/>
    </div>
  )
}
