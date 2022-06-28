import './App.css'
import { Footer } from 'Pages/Footer'
import NFTRoutes from 'routes'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='App' style={{}}>
      <BrowserRouter>
        <NFTRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
