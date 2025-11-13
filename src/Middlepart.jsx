import { h1, section } from 'framer-motion/client'
import React from 'react'
import './Middlepart.css'
import Searchbar from './Searchbar'
export default function Middlepart() {
  return (
    <section className="midsec">

    <h1 className="midh1">Book Your Next <span>Show</span> Or <span>Party</span></h1>
    <p>Discover and book the most exciting events,parties,and show near you.</p>
   <Searchbar/>
    </section>
  )
}
