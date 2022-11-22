import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes"
import { HashRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
