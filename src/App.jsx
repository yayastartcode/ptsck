import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import HomePage from './pages/HomePage'
import ArticleDetail from './components/ArticleDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artikel/:slug" element={<ArticleDetail />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
