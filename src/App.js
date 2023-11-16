import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithSidebar from './components/WithSidebar';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithSidebar />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
