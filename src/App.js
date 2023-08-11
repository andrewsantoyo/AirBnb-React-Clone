import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card';
// Import images for Card prop.
import katieZaferesImage from './images/katie-zaferes.png';

function App() {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Card 
        img={katieZaferesImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
