import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import './css/styles.css';
import { About } from './pages/About';
import { Works } from './pages/Works';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
