// import './App.css';
import Login from './components/Login';
import PageNotFound404 from './components/PageNotFound404';
import Logout from './components/Logout';
import HomeScreen from './components/HomeScreen';
import Products from './components/Products';
import UserManagement from './components/UserManagement';
import SearchProduct from './components/SearchProduct';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { WithNavAppBar } from "./components/common/WithNavAppBar";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/logout" element={<Logout />} exact={true} />

        <Route path="/home" element={<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={[]}> <WithNavAppBar> <HomeScreen/> </WithNavAppBar></ProtectedRoute> } />
        <Route path="/products" element={<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={[]}> <WithNavAppBar> <Products/> </WithNavAppBar></ProtectedRoute> } />
        
        <Route path="/chat" element={<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={[]}> <WithNavAppBar> <Chat/> </WithNavAppBar></ProtectedRoute> } />
          
        <Route path="/search-product" element={<ProtectedRoute roles={['admin', 'owner', 'user']} permissions={[]}> <WithNavAppBar> <SearchProduct/> </WithNavAppBar></ProtectedRoute> } />
        
        <Route path="/usermanagement" element={<ProtectedRoute roles={['admin']} permissions={['read_user', 'update_user']}> <UserManagement /> </ProtectedRoute>} />
    
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;