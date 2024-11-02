import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './componant/Nav';
import Tasks from './componant/Tasks';
import ErrorP from './componant/error';
import Home from './componant/Home';
import About from './componant/About';

export default function App() {
  return (
    <BrowserRouter basename="/ToDoList">
      <div>
        <Nav />
        <Routes>
          <Route path='/Tasks' element={<Tasks/>} />
          <Route path='/About' element={<About/>} />
          <Route path='*' element={<ErrorP />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
