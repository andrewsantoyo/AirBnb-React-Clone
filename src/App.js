import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <a href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
