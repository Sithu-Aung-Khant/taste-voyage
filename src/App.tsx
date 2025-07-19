import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TownDetailPage from './pages/TownDetailPage';
import BeachDetailPage from './pages/BeachDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/towns/:id' element={<TownDetailPage />} />
        <Route path='/beaches/:id' element={<BeachDetailPage />} />
        {/* Add more routes as pages are developed */}
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
