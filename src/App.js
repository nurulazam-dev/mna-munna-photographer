import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/checkout'
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
