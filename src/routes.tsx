import Footer from 'Components/Footer';
import Menu from 'Components/Menu';
import PaginaPadrao from 'Components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import Prato from 'pages/Prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path='cardapio' element={<Cardapio />} />
          <Route path='sobre' element={<Sobre />} />
        </Route>
        <Route path='prato/:id' element={<Prato />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};