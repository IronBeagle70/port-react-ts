import { useState } from 'react'
import Contact from './components/Contact'
import FooterSection from './components/FooterSection'
import HeaderComponent from './components/HeaderComponent'
import SectionComponent from './components/SectionComponent'
import Welcome from './components/Welcome'
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderComponent />
      <SectionComponent id='welcome'>
        <Welcome />
      </SectionComponent>
      <SectionComponent id='about' >
        <p>About me</p>
      </SectionComponent>
      <SectionComponent id='projects' >
        <p>Projects</p>
      </SectionComponent>
      <SectionComponent id='contact' >
        <Contact />
      </SectionComponent>
      <SectionComponent id='footer' >
        <FooterSection />
      </SectionComponent>
    </div>
  )
}

export default App
