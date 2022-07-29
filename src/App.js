import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Activities from './components/Activities';
import Philosophy from './components/Philosophy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Activities/>
      <Philosophy/>
    </div>
  );
}

export default App;
