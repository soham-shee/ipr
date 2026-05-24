import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import FlowChart from './components/FlowChart/FlowChart'
import Faqs from './components/Faqs/Faqs'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import { Form } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import {useState} from 'react'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <FlowChart />
          <Faqs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;