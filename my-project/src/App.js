import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/Home';
import ReadPage from './components/Read';
import CreatePage from './components/Create';
import EditPage from './components/Edit';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div style={styles.appContainer}>
        <div style={styles.contentWrapper}>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Read" element={<ReadPage />} />
            <Route path="/Create" element={<CreatePage />} />
            <Route path='/Edit/:id' element={<EditPage />} />
            <Route path="*" element={<Navigate to="/Home" replace />} /> {/* Default to /Home */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the full viewport height
  },
  contentWrapper: {
    flex: '1 0 auto', // Allows the content to expand while pushing the footer down
  },
};

export default App;
