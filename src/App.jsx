import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App-content">
      <div className="App">
        <NavBar />
        <div className="container">
          <header className="App-header">
            <h1>Gerenciador de E-commerce</h1>
          </header>
          <MainContent />
        </div>        
      </div>
      <Footer />  
    </div>
  );
}

export default App;
