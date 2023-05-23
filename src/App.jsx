import { Routes, Route } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import Home from './pages/Home';
import Surf from './pages/Surf';
import Accomodation from './pages/Accomodation';

function App() {
  inject();
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/surfing' element={<Surf />} />
        <Route path='/accomodation' element={<Accomodation />} />
      </Routes>
    </div>
  )
}
export default App;
