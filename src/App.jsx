import './styles/App.css'
import Banner from './layout/Banner'
import Main from './layout/Main'
import Apartment from './components/Apartment'
import Navbar from './components/Navbar'
import Footer from './layout/Footer'

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
