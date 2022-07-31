/* eslint-disable react/jsx-pascal-case */
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Activities from './components/Activities';
import Philosophy from './components/Philosophy';
import Hotels_Apartments from './components/Hotels_Apartments';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Activities/>
      <Philosophy/>
      <Hotels_Apartments/>
      <Search/>
    </div>
  );
}

export default App;
