import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TownDetailPage from './pages/TownDetailPage';
import BeachDetailPage from './pages/BeachDetailPage';
import AllBeachesPage from './pages/AllBeachesPage';
import TopCitiesPage from './pages/TopCitiesPage';
import ShanHighlandsPage from './pages/ShanHighlandsPage';
import SoutheastMyanmarPage from './pages/SoutheastMyanmarPage';
import AllTownsPage from './pages/AllTownsPage';
import AllFoodsPage from './pages/AllFoodsPage';
import ContactPage from './pages/ContactPage';
import SanityTestPage from './pages/SanityTestPage';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/towns' element={<AllTownsPage />} />
        <Route path='/towns/top-cities' element={<TopCitiesPage />} />
        <Route path='/towns/shan-highlands' element={<ShanHighlandsPage />} />
        <Route path='/towns/southeast' element={<SoutheastMyanmarPage />} />
        <Route path='/towns/:id' element={<TownDetailPage />} />
        <Route path='/beaches' element={<AllBeachesPage />} />
        <Route path='/beaches/:id' element={<BeachDetailPage />} />
        <Route path='/foods' element={<AllFoodsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/sanity-test' element={<SanityTestPage />} />
        {/* Add more routes as pages are developed */}
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
