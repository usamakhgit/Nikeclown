import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Main from './Components/Main';
import Login from './Pages/Login';
import ShopNow from './Pages/ShopNow';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<Navigate to='/Login' />}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/Shopnow' element={<ShopNow/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
