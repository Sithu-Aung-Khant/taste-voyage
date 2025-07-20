import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TownDetailPage from './pages/TownDetailPage';
import BeachDetailPage from './pages/BeachDetailPage';
import AllBeachesPage from './pages/AllBeachesPage';
import TopCitiesPage from './pages/TopCitiesPage';
import ShanHighlandsPage from './pages/ShanHighlandsPage';
import SoutheastMyanmarPage from './pages/SoutheastMyanmarPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/towns/top-cities' element={<TopCitiesPage />} />
        <Route path='/towns/shan-highlands' element={<ShanHighlandsPage />} />
        <Route path='/towns/southeast' element={<SoutheastMyanmarPage />} />
        <Route path='/towns/:id' element={<TownDetailPage />} />
        <Route path='/beaches' element={<AllBeachesPage />} />
        <Route path='/beaches/:id' element={<BeachDetailPage />} />
        {/* Add more routes as pages are developed */}
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
