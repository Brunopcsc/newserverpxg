import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Level150 } from './pages/lvl150'
import EmDesenvolvimentoPage from './components/developing'

function App() {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Router>
            <div className="App">
                <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<EmDesenvolvimentoPage />} />
                        <Route path="/lvl150" element={<Level150 />} />
                        <Route
                            path="/lvl200"
                            element={<EmDesenvolvimentoPage />}
                        />
                        <Route
                            path="/lvl300"
                            element={<EmDesenvolvimentoPage />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
