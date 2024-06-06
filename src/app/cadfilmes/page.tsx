'use client'
import './estilos.css'

import { useEffect, useState } from "react"

export interface filmeProps {
  id: number
  titulo: string
  genero: string
  duracao: number
  preco: number
  foto: string
  num: number
  total: number
  sinopse: string
}

function CadFilmes() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function getFilmes() {
      const response = await fetch("http://localhost:3004/filmes")
      const dados = await response.json()
      setFilmes(dados)
    }
    getFilmes()
  }, [])

  const listaFilmes = filmes.map((filme: filmeProps) => (
    <tr key={filme.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img src={filme.foto} alt="Capa do Filme"
          className="foto-filme" />
      </th>
      <td className="px-6 py-4">
        {filme.titulo}
      </td>
      <td className="px-6 py-4">
        {filme.genero}
      </td>
      <td className="px-6 py-4">
        {Number(filme.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
      </td>
      <td className="px-6 py-4">
        {filme.total} / {filme.num} =&nbsp;
        {filme.num == 0 ?
          0 :
          (filme.total / filme.num).toFixed(1)
        } estrelas
      </td>
      <td className="px-6 py-4">

      </td>
    </tr>
  ))

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Cadastro de Filmes
      </h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Foto
              </th>
              <th scope="col" className="px-6 py-3">
                Título do Filme
              </th>
              <th scope="col" className="px-6 py-3">
                Gênero
              </th>
              <th scope="col" className="px-6 py-3">
                Preço R$
              </th>
              <th scope="col" className="px-6 py-3">
                Avaliação
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {listaFilmes}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CadFilmes