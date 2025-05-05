import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/Login';
import AddPlayer from './components/AddPlayer';


import { Outlet } from 'react-router-dom';
import AddLeader from './components/AddLeader';
import LeaderInfo from './components/LeaderInfo';
import PlayerInfo from './components/PlayerInfo';
import PlayerList from './components/PlayerInfo';
import LeaderList from './components/LeaderInfo';

const Layout = () => (
  <>
    <Header />
    <Outlet /> {/* Renders child route content */}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="addPlayer" element={<AddPlayer />} />
          <Route path="addLeader" element={<AddLeader />} />
          <Route path="leaderInfo" element={<LeaderList />} />
          <Route path="PlayerInfo" element={<PlayerList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
