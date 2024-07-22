import './styles/App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Main from './components/Main'
import Apartment from './components/Apartment'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Banner />
        <Apartment />
      </Main>
      <Footer />
    </div>
  )
}

export default App
