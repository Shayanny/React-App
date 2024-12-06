import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/Home';
import ReadPage from './components/Read';
import CreatePage from './components/Create';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Read" element={<ReadPage/>} />
        <Route path="/Create" element={<CreatePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
