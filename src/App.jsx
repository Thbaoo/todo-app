import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ToDoList from './pages/ToDoList';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ToDoList" element={<ToDoList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
