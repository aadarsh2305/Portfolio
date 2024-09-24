import About from "./components/About/About"
import ContactMe from "./components/ContactMe/ContactMe"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import ScrollToTop from "react-scroll-to-top";


function App() {

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />                    
      <ScrollToTop smooth className="bg-[#93cfff] rounded-full mr-[-20px] p-1.5 items-center justify-center shadow-md transition-all duration-300 hover:bg-[#f7f8f9] hover:scale-105"/>
    </div>
  )
}

export default App
