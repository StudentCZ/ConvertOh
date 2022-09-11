import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Temp from './Temp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/temp' element={<Temp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
