import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import Interests from './components/Interests'
import "./App.css"

export default function App(){
    return (
        <main>
        <Info />
        <About />
        <Interests />
        <Footer />
        </main>
        
    )
}