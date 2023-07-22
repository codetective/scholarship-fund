import { Routes, Route } from 'react-router-dom';
import { Apply, Home } from './pages';
import { NavBar } from './components';
import Admin from './pages/Admin';
function App() {
  return (
    <>
      <div className='relative'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
