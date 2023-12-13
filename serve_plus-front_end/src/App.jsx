 import './App.css'
import {Routes, Route} from 'react-router-dom'
function App() {
 
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Auction" element={<Auction />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
