
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from "./pages/Navbar";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {About} from "./pages/About";
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path="/about" element={<About/>}/>
 
</Routes>
     </Router>
    </div>
  );
}

export default App;
