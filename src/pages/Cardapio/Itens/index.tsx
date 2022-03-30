import cardapio from '../../../data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Cardapio } from 'types/Prato';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string,
}

function Itens(props: Props) {

  const [lista, setLista] = useState(cardapio);

  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }


  const ordenarPropriedadeCrecente = (
    lista: Cardapio,
    campo: 'size' | 'serving' | 'price') => {
    return lista.sort((a, b) => (a[campo] > b[campo] ? 1 : -1));
  };

  function ordenar(novaLista: Cardapio) {

    switch (ordenador) {
      case 'porcao':
        return ordenarPropriedadeCrecente(novaLista, 'size');
      case 'qtd_pessoas':
        return ordenarPropriedadeCrecente(novaLista, 'serving');
      case 'preco':
        return ordenarPropriedadeCrecente(novaLista, 'price');
      default:
        return novaLista;
    }

  }

  useEffect(() => {
    const novaLista = cardapio.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default Itens;