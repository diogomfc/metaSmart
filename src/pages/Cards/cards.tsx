import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";

import Layout from "../../components/Layout";

// Styles
import styles from "./styles.module.scss";

//Tipagens
type ListaConsultoresAuto = {
  id: string;
  consultor: string;
  carteirizadas: string;
  VA: string;
  VR: string;
  PC: string;
  VRobjetivo: string;
  PCobjetivo: string;
  MetaDia: string;
  data: string;
};

type dbMetricasConsultoresAutoProps = {
  dbMetricasConsultoresAuto: ListaConsultoresAuto[];
};

export default function Home(props: dbMetricasConsultoresAutoProps) {
  const consultores = props.dbMetricasConsultoresAuto;

  //Filter por ID
  const isName = (filterName) => filterName.id === "1";
  const isNames = consultores.filter(isName);

  const NomeConsultores = isNames.map((c, i) => <p> {c.consultor}</p>);

  const TotalVR = isNames.map((c, i) => c.VR);

  const MetaTotalVR = isNames.map((c, i) => c.VRobjetivo);

  //console.log(MetaTotalVR)
  const NovoConsultores = isNames.map((c, i) => (
    // Cards
    <>
      <div className={styles.container}>
        {TotalVR < MetaTotalVR ? (
          <div className={styles.cardnegativo}>
            <p> Vistoria Aprovada:</p>
            <h1>{c.VR}</h1>
            <small>Meta: {c.VRobjetivo}</small>
            <br />
          </div>
        ) : (
          <div className={styles.card}>
            <p> Vistoria Aprovada:</p>
            <h1>{c.VR}</h1>
            <small>Meta: {c.VRobjetivo}</small>
            <br />
          </div>
        )}
      </div>

      <div className={styles.container}>
        <div className={styles.carterizadas}>
          <p> Carterizadas:</p>
          <h1>{c.carteirizadas}</h1>
          <small>Meta: {c.MetaDia}</small>
          <br />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.card}>
          <p> Pasta Completa:</p>
          <h1>{c.PC}</h1>
          <small>Meta: {c.PCobjetivo}</small>
          <br />
        </div>
      </div>
    </>
  ));

  return (
    <Layout>
      {/* {NomeConsultores} */}
      <div>
        <div className={styles.content}>{NovoConsultores}</div>
      </div>
      <div>
        <div className={styles.content}>{NovoConsultores}</div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { dbMetricasConsultoresAuto, title } = await fetch(
    "https://ideia-unica-pi-sepia.vercel.app/api/db1"
  )
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((resObjPromise) => resObjPromise);

  return {
    props: {
      dbMetricasConsultoresAuto,
      title,
    },
    revalidate: 10,
  };
};
