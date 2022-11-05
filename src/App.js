// import './App.css';
import Login from './components/Login';
import PageNotFound404 from './components/PageNotFound404';
import Logout from './components/Logout';
import HomeScreen from './components/HomeScreen';
import UserManagement from './components/UserManagement';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./settings/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/logout" element={<Logout />} exact={true} />
        <Route path="/home" element={<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={[]}> <HomeScreen /> </ProtectedRoute>} />
        <Route path="/usermanagement" element={<ProtectedRoute roles={['admin']} permissions={['read_user', 'update_user']}> <UserManagement /> </ProtectedRoute>} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
