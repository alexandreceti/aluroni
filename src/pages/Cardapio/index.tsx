import styles from './Cardapio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import Buscador from './Buscador';

import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador, { OpcaoOrdenador } from './Ordenador';
import Itens from './Itens';


function Cardapio() {

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcaoOrdenador>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápoi</h3>
      <Buscador busca={busca} setBusca={setBusca} />

      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </div>
    </section>
  );
}

export default Cardapio;