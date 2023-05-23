import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Surf from './pages/Surf';
import Accomodation from './pages/Accomodation';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <Analytics />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/surfing' element={<Surf />} />
        <Route path='/accomodation' element={<Accomodation />} />
      </Routes>
    </div>
  )
}
export default App;
