import Header from './components/Header'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import WhatWeDo from './components/WhatWeDo'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <AboutUs />
        <WhatWeDo />
      </main>
      <Footer />
    </div>
  )
}

export default App
