import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Promo from './components/Promo';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="content-container">
        <About />
        <Product />
      </div>
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
