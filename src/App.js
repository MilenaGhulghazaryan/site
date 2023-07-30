import './App.css';
import Gallery from './Components/Gallery/gallery';
import Nav from './Components/Nav/nav';
import Services from './Components/Services/services';
import Home from './Components/Home/home';

function App() {
  return (
    <div className='App'>
      <Home />
      <Services />
      <Gallery />
      <Nav />
    </div>
  );
}

export default App;
