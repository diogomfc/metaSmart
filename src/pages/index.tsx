import {GetStaticProps} from 'next'
import React from 'react'
import Link from 'next/link'

//Tipagens
type ListaConsultoresAuto ={  
  id: string,
  consultor: string,
  carteirizadas: string,
  VA: string,
  VR: string,
  PC: string,
  VRobjetivo: string,
  PCobjetivo: string,
  MetaDia: string,
  data: string,
}

type dbMetricasConsultoresAutoProps = {
  dbMetricasConsultoresAuto: ListaConsultoresAuto[];
}

type Title = {
  title: string;
}

const ListaHome = (props: Title) => (
  <div>
    <h1>Titulo Banco de dados</h1>
    <p>
      {props.title}
    </p>
    
    <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/card/listaCard">
        <a>Lita de Jogos</a>
        </Link>{' '}
        |{' '}
        <Link href="/Cards/cards">
          <a>Reletório Geral</a>
        </Link>{' '}
        |{' '}
        <Link href="/card/listaNomes">
        <a>Lista Nomes</a>
        </Link>
      </nav>
   
  </div>
)

//conexao com a planilha
export const getStaticProps: GetStaticProps = async () =>{
  
  const { dbMetricasConsultoresAuto,title } = await fetch('http://localhost:3000/api/dbApi/db')
    
  .then(res => {
      if(res.ok) return res.json()
    })
    .then(resObjPromise => resObjPromise)
    
  return {
    props:{
      dbMetricasConsultoresAuto,
      title
    },
    revalidate: 10
  }
}

export default ListaHome







