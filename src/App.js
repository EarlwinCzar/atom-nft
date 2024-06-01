import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

import './App.css';
import './styles/all-styles.css'

function App() {
  return (
    <>
    <div className="container">
    <Header></Header>
    <Section1/>
    <Section2/>
    <div className="background-wrapper">
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
    
    </div>

    </>
  );
}

export default App;
