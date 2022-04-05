import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ScrollToTop from './pages/ScrollToTop'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import Suppliers from './pages/Suppliers';
import Supplier from './pages/Supplier';
import FourOFour from './pages/FourOFour';
import "./index.css"
import ContactMM from './pages/ContactMM';

render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* no url added means go home */}
        <Route index element={<Home />} />
        <Route path='produtos' element={<Products />} />
        <Route path='produtos/:categoryId' element={<Category />} />
        <Route path='representadas' element={<Suppliers />} />
        <Route path='representadas/:supplierId' element={<Supplier />} />
        <Route path='contatar-mm' element={<ContactMM />} />
        <Route path='*' element={<FourOFour />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);