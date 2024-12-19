import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/Home';
import ReadPage from './components/Read';
import CreatePage from './components/Create';
import EditPage from './components/Edit';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Read" element={<ReadPage/>} />
        <Route path="/Create" element={<CreatePage/>} />
        <Route path='/Edit/:id' element={<EditPage />} />
        <Route path="*" element={<Navigate to="/Home" replace />} /> {/* Default to /Home */}
        
      </Routes>
    </Router>
  );
}

export default App;
