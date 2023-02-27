import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import SectionComponent from './components/SectionComponent'
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderComponent />
      <SectionComponent id='welcome'>
        <p>Welcome to my Website</p>
      </SectionComponent>
      <SectionComponent id='about' >
        <p>About me</p>
      </SectionComponent>
      <SectionComponent id='contact' >
        <p>My contact</p>
      </SectionComponent>
      <SectionComponent id='footer' >
        <p>Footer</p>
      </SectionComponent>
    </div>
  )
}

export default App
