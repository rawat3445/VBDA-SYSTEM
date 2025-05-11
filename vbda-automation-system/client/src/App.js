import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InviteForm from './pages/inviteForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invite" element={<InviteForm />} />
      </Routes>
    </Router>
  );
}

export default App;
