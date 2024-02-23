import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Works } from './pages/Works';
import { Personal } from './pages/Personal';
import { Business } from './pages/Business';
import { PersonalDetails } from './pages/PersonalDetails';
import { BusinessDetails } from './pages/BusinessDetails';
import { NotFoundPage } from './pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/personal/:id" element={<Personal />} />
          <Route path="/business/:id" element={<Business />} />
          <Route path="/personalDetail/:id" element={<PersonalDetails />} />
          <Route path="/businessDetail/:id" element={<BusinessDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
