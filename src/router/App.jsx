import { Route, Routes } from "react-router-dom"
import ForInInput from "../pages/ForInInput"
import Home from "../pages/Home"

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<ForInInput/>} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

