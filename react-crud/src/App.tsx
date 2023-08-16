import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import ProfileCreate from './pages/profileCreate';
import ProfileModify from './pages/profileModify';
import Client from './pages/client';
import ClientCreate from './pages/clientCreate';
import ClientModify from './pages/clientModify';
import Product from './pages/product';
import ProductCreate from './pages/productCreate';
import ProductModify from './pages/productModify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path='/' element={<Home/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path='profile/create' element={<ProfileCreate/>}/>
          <Route path='profile/modify/:username' element={<ProfileModify/>}/>
          <Route path="client" element={<Client/>}/>
          <Route path='client/create' element={<ClientCreate/>}/>
          <Route path='client/modify/:clientId' element={<ClientModify/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path='product/create' element={<ProductCreate/>}/>
          <Route path='product/modify/:sku' element={<ProductModify/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
