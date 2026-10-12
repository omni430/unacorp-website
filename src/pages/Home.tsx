import Header from '../sections/Header'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Greeting from '../sections/Greeting'
import OrgChart from '../sections/OrgChart'
import BioLNG from '../sections/BioLNG'
import Applications from '../sections/Applications'
import Apparel from '../sections/Apparel'
import News from '../sections/News'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#1d1d1f] antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Greeting />
        <OrgChart />
        <BioLNG />
        <Applications />
        <Apparel />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
