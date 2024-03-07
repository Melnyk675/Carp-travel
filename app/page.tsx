
import About from './components/About/About';
import Career from './components/Career/Career';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

export default function HomePage() {
 return(
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Career />
    <Gallery />
    <Contacts />
    </>
  )
 }

