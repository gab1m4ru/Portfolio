import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HelloPage from './pages/Hello/HelloPage'
import AboutPage from './pages/About/AboutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HelloPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App
