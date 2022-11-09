import Navbar from "./components/Navbar"
import AnimatedRoutes from "./components/AnimatedRoutes"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
