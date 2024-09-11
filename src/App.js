import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Food from './pages/Food';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Food />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
