import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComp from './Components/HomeComp';
import ToDoListAddComp from './Components/ToDoListAddComp';
import ToDoListUpdateComp from './Components/ToDoListUpdateComp';
import ToDoListDeleteComp from './Components/ToDoListDeleteComp';

function App() {
  return (
    <BrowserRouter basename='/'>

      <Routes>
        <Route path="/" element={<HomeComp></HomeComp>}></Route>
        <Route path="/todoadd" element={<ToDoListAddComp></ToDoListAddComp>}></Route>
        <Route path="/todoupdate/:id" element={<ToDoListUpdateComp></ToDoListUpdateComp>}></Route>
        <Route path="/tododelete/:id" element={<ToDoListDeleteComp></ToDoListDeleteComp>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
