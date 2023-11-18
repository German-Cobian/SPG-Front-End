import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithSidebar from './components/WithSidebar';
import Login from './components/Login';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route element={<WithSidebar />}>
          <Route path="/chat/:id" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
