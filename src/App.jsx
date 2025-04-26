// src/App.jsx
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Schedule from './components/Schedule'
import FAQ from './components/FAQ'
import GiftRegistry from './components/GiftRegistry'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <>
    <Header />
    <Hero />
    <Schedule />
    <Story />
    <RSVP />
    <GiftRegistry />
    <FAQ />
    <Footer />
  </>
)

export default App