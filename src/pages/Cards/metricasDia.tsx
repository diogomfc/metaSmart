import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";

import {
  Container,
  ContainerPuxadasCarterizadas,
  OptionsContainer,
  Avatar,
  ContainerGeral,
} from "../../styles/stylesCards";

interface IListaConsultoresAuto {
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
  img: string;
}

interface IdbMetricasConsultoresAutoProps {
  dbMetricasConsultoresAuto: IListaConsultoresAuto[];
}

function Cards(props: IdbMetricasConsultoresAutoProps) {
  const consultores = props.dbMetricasConsultoresAuto;

  //Filter por ID
  const isName = (filterName: any) => filterName.id === "1";
  const isNames = consultores.filter(isName);

  //Filter nome
  const NomeConsultores = isNames.map((c, i) => <p> {c.consultor}</p>);

  /* Card Vistoria */
  const TotalVR = isNames.map((c, i) => c.VR);
  const MetaTotalVR = isNames.map((c, i) => c.VRobjetivo);

  /* Card Pasta Completa */
  const TotalPC = isNames.map((c, i) => c.PC);
  const PCobjetivo = isNames.map((c, i) => c.PCobjetivo);

  /* Card Pasta Completa */
  const TotalCarteirizadas = isNames.map((c, i) => c.carteirizadas);
  const MetaDia = isNames.map((c, i) => c.MetaDia);

  const MetricaDiaConsultores = isNames.map((c, i) => (
    <>
      <OptionsContainer>
        <Avatar>
          <div
            className={`${
              TotalPC < PCobjetivo
                ? "statusAvatarNegativo"
                : "statusAvatarPositivo"
            }`}
          >
            <img src={c.img} />
            {/* <img src="https://ca.slack-edge.com/T02CW8PH8-U01MDDAEFU4-fbf8a8626100-48" /> */}
          </div>
        </Avatar>

        <span>{NomeConsultores}</span>
      </OptionsContainer>

      {/* Card Puxadas */}
      <ContainerPuxadasCarterizadas>
        <div
          className={`${
            TotalVR < MetaTotalVR
              ? "statusNegativoCards1"
              : "statusPositivoCards1"
          }`}
        >
          <span>Puxadas:</span>
          <h1>{c.VR}</h1>
          <small>Meta: {c.VRobjetivo}</small>
        </div>
      </ContainerPuxadasCarterizadas>
      {/* Card Carterizadas */}
      <ContainerPuxadasCarterizadas>
        <div
          className={`${
            TotalVR < MetaTotalVR
              ? "statusNegativoCards1"
              : "statusPositivoCards1"
          }`}
        >
          <span>Carterizadas:</span>
          <h1>{c.VR}</h1>
          <small>Meta: {c.VRobjetivo}</small>
        </div>
      </ContainerPuxadasCarterizadas>

      {/* Card Vistoria em Regulação */}
      <Container>
        <div
          className={`${
            TotalVR < MetaTotalVR
              ? "statusNegativoCards"
              : "statusPositivoCards"
          }`}
        >
          <span>Vistoria em Regulação:</span>
          <h1>{c.VR}</h1>
          <small>Meta: {c.VRobjetivo}</small>
        </div>
      </Container>
      {/* Card Vistoria Aprovada */}
      <Container>
        <div
          className={`${
            TotalCarteirizadas < MetaDia
              ? "statusNegativoCards"
              : "statusPositivoCards"
          }`}
        >
          <span>Vistoria Aprovada:</span>
          <h1>{c.carteirizadas}</h1>
          <small>Meta: {c.MetaDia}</small>
        </div>
      </Container>
      {/* Card Pasta Completa */}
      <Container>
        <div
          className={`${
            TotalPC < PCobjetivo ? "statusNegativoCards" : "statusPositivoCards"
          }`}
        >
          <span>Pasta Completa:</span>
          <h1>{c.PC}</h1>
          <small>Meta: {c.PCobjetivo}</small>
        </div>
      </Container>
    </>
  ));

  return (
    <Layout>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
      <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
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

export default Cards;
