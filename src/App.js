
import './App.css';
import {Routes , Route} from 'react-router-dom'
import { Home } from './Componetnts/Home';
import {About} from './Componetnts/About'
import { Products } from './Componetnts/Products';
import { Navbar } from './Componetnts/Navbar';
import { Sign } from './Componetnts/Sign';
import { Prodct } from './Componetnts/Prodct';
function App() {
  return (
    <div className="App">
      <Navbar />
     <h1>Rounting </h1>
        
              <Routes>
                    <Route path="/" element={  <Home />}/>
                    
                    <Route path="/about" element={ <About />}/>
            
                   <Route path='/products' element={< Products/>} />
                   
                   <Route path="/products/:id/:name" element={<Prodct />} />
              </Routes>




            
  </div>
  );
}

export default App;
