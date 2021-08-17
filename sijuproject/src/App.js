
import './App.css';
import Header from './Components/Header.js';
import Navigation from './Components/Navigation.js';
import Company from './Components/Company.js';
import Clients from './Components/Clients.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">       
      <Header/>
      <Navigation/>
      <Company/>
      <Clients/>
      <Contact/>
      <Footer/>        
    </div>
  );
}

export default App;
