import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout";
import Home from "./components/home";
import Profile from "./components/profile";
import ProfileCreate from './components/profileCreate';
import ProfileModify from './components/profileModify';
import Client from './components/client';
import ClientCreate from './components/clientCreate';
import ClientModify from './components/clientModify';
import Product from './components/product';
import ProductCreate from './components/productCreate';
import ProductModify from './components/productModify';

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
