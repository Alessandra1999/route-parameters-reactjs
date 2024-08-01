import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserDetail from './components/UserDetail';
import Navigation from './components/Navigation';

function App() {

  return (
    <Router>
      <div>
        <h1>Users Details</h1>
        <Navigation />
        <Routes>
          <Route path="/users" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
