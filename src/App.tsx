import { Header } from './View/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './View/Pages/Shop';
import { PreviewPage } from './View/PreviewPage/PreviewPage';
import { Product } from './View/Pages/Shop/Product';
import { Products } from './View/Pages/Shop/Products';

const App = ()=> {

  
  

  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='' element={<PreviewPage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/shop/products/:category/:productId" element={<Product />}/>
          <Route path="/shop/products/:category" element={<Products />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
