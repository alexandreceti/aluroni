import style from './Ordenador.module.scss'
import opcoesJson from './opcoes.json'
import classNames from 'classnames'
import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export type OpcaoOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco'

interface Props {
  ordenador: OpcaoOrdenador,
  setOrdenador: React.Dispatch<React.SetStateAction<OpcaoOrdenador>>
}

interface IOpcao {
  nome: string
  value: OpcaoOrdenador,
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const opcoes = opcoesJson as IOpcao[]

  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

  return (
    <button className={classNames({
      [style.ordenador]: true,
      [style["ordenador--ativo"]]: ordenador !== "",
    })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}>
      <span>{nomeOrdenador || "Ordenar por"}</span>

      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}

      <div className={classNames({
        [style.ordenador__options]: true,
        [style["ordenador__options--ativo"]]: aberto,
      })}>
        {opcoes.map((opcao) => (
          <div onClick={() => setOrdenador(opcao.value)}
            className={style.ordenador__option}
            key={opcao.value}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button >
  )
}