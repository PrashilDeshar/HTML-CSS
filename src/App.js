import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button/button";
import Input from './Components/Input';
import UserForm from './pages/home/input';
import Home from './pages/home';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Route } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" component={<UserForm/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
