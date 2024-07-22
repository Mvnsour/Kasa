import './styles/App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Main from './components/Main'
import Apartment from './components/Apartment'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Banner />
        <Apartment />
      </Main>
    </div>
  )
}

export default App
