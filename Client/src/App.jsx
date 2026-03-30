import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './components/customerpage/HomePage'


function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
