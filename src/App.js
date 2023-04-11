
import './App.css';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Professionals from './Components/Professionals/Professionals';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Professionals />
      <Services />
    </div>
  );
}

export default App;
