import './styles/App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ApartmentsGrid from './components/ApartmentsGrid'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Banner />
        <ApartmentsGrid />
      </Main>
    </div>
  )
}

export default App
