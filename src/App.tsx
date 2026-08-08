import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Portfolio from './Pages/Portfolio.tsx';
import Research from './Pages/Research.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
       
        <Route index element={<Home />} />
        <Route path="About Me" element={<About />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Research" element={<Research />} />
       
      </Routes>

    </BrowserRouter>
  );
}

export default App;