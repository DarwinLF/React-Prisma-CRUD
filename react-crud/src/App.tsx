import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./components/home";
import Profile from "./components/profile/profile";
import ProfileCreate from './components/profile/profileCreate';
import ProfileModify from './components/profile/profileModify';
import Client from './components/client/client';
import ClientCreate from './components/client/clientCreate';
import ClientModify from './components/client/clientModify';
import Product from './components/product/product';
import ProductCreate from './components/product/productCreate';
import ProductModify from './components/product/productModify';

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
