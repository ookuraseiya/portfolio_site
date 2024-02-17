import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Personal } from './pages/Personal';
import { Business } from './pages/Business';
import './css/styles.css';
import { PersonalDetails } from './pages/PersonalDetails';
import { BusinessDetails } from './pages/BusinessDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/personal/:id" element={<PersonalDetails />} />
          <Route path="/business/:id" element={<BusinessDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
