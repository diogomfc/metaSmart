import { GetStaticProps } from "next";
import React, { useMemo, useState, useEffect } from "react";

import Layout from "../../components/Layout";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import {
  Container,
  ContainerPuxadasCarterizadas,
  OptionsContainer,
  Avatar,
  ContainerGeral,
  AvatarColor,
} from "../../styles/stylesAdmin/stylesMetricasDiaTime";

//INTERFACES TIPAGEM
interface IdbMetricasTitle {
  title: string;
}
interface IListaConsultoresAuto {
  id: string;
  consultor: string;
  puxadas: string;
  carteirizadas: string;
  VA: string;
  VR: string;
  PC: string;
  VRobjetivo: string;
  PCobjetivo: string;
  MetaDia: string;
  dataFormatted: string;
  img: string;
  tagColor: string;
}
//GuiaCadastroConsultores
interface ICadastroConsultores {
  Consultores: string;
  Email_Consultores: string;
  Login_Consultores: string;
  Time: string;
  Lider: string;
  AvatarConsultores: string;
}
//Guia Metricas Dia
interface IMetricasDias {
  Consultores: string;
  Puxadas: string;
  Carteirizadas: string;
  Vistorias_Realizadas: string;
  Pastas_Completas: string;
  Contratos_Emitidos: string;
  Pagos: string;
  Originacao: string;
  Data: string;
  AvatarConsultores: string;
}

interface IdbMetricasConsultoresAutoProps {
  dbMetricasConsultoresAuto: IListaConsultoresAuto[];
  title: IdbMetricasTitle;
  guiaMetricaDia: IMetricasDias[];
  guiaCadastroConsultores: ICadastroConsultores[];
}

function ListaConsultores(props: IdbMetricasConsultoresAutoProps) {
  const consultores = props.dbMetricasConsultoresAuto;
  const GuiaMetricaDia = props.guiaMetricaDia;
  const CadastroConsultores = props.guiaCadastroConsultores;

  //Mês
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  //Ano
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  //Dia
  const [diaSelected, setDiaSelected] = useState<string>(
    String(new Date().getDate())
  );

  //filtros por data
  const filteredData = GuiaMetricaDia.filter((item) => {
    const date = new Date(item.Data);
    const dia = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();

    const consultorNome = item.Consultores;

    return (
      consultorNome &&
      dia === diaSelected &&
      month === monthSelected &&
      year === yearSelected
    );
  });
  const ListaNomesConsultores = GuiaMetricaDia.map((item) => {
    return {
      NomeConsultores: item.Consultores,
    };
  });

  const ListaNomesConsultoresCadastro = CadastroConsultores.map((item) => {
    return {
      NomeCadastroConsultores: item.Login_Consultores,
    };
  });

  //filter cadastro consultores
  const ListaCadastroConsultores = CadastroConsultores.map((item) => {
    return {
      Avatar: item.AvatarConsultores,
      Consultores: item.Consultores,
      Email_Consultores: item.Email_Consultores,
      Login_Consultores: item.Login_Consultores,
      Time: item.Time,
      Lider: item.Lider,
    };
  });

  //Filter por ID
  const isName = (filterName: any) => filterName.id === "0";
  const isNames = consultores.filter(isName);

  //Filter nome
  const NomeConsultores = isNames.map((c, i) => <p> {c.consultor}</p>);

  /* Card Vistoria */
  const TotalVR = consultores.map((cv, i) => cv.VR);
  const MetaTotalVR = consultores.map((cv1, i) => cv1.VRobjetivo);

  /* Card Pasta Completa */
  const TotalPC = consultores.map((cp, i) => cp.PC);
  const PCobjetivo = consultores.map((cp1, i) => cp1.PCobjetivo);

  /* Card Pasta Completa */
  const TotalCarteirizadas = consultores.map((cc, i) => cc.carteirizadas);
  const MetaDia = consultores.map((cc1, i) => cc1.MetaDia);

  const ResponseDb = filteredData.map((item) => {
    return {
      Consultores: item.Consultores,
      Puxadas: item.Puxadas,
      Carteirizadas: item.Carteirizadas,
      Vistorias_Realizadas: item.Vistorias_Realizadas,
      Pastas_Completas: item.Pastas_Completas,
      Contratos_Emitidos: item.Contratos_Emitidos,
      Pagos: item.Pagos,
      Originacao: item.Originacao,
      Data: item.Data,
      AvatarConsultores: item.AvatarConsultores,
      dataFormatted: formatDate(item.Data),
      StatusColorPasta: item.Pastas_Completas >= "1" ? "#2ECC71" : "#F84F6B",
      StatusColorVistoria:
        item.Vistorias_Realizadas >= "1" ? "#2ECC71" : "#F84F6B",
      StatusColorContratos:
        item.Contratos_Emitidos >= "1" ? "#2ECC71" : "#F84F6B",
      StatusColorAvatar: item.Pastas_Completas >= "1" ? "#2ECC71" : "#F84F6B",
      StatusColorPuxadasCarterizadas:
        item.Puxadas >= "15" ? "#2ECC71" : "#F84F6B",
    };
  });

  //Select Input Dia e Mes
  const dias = [
    { value: "1", label: "01" },
    { value: "2", label: "02" },
    { value: "3", label: "03" },
    { value: "4", label: "04" },
    { value: "5", label: "05" },
    { value: "6", label: "06" },
    { value: "7", label: "07" },
    { value: "8", label: "08" },
    { value: "9", label: "09" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
  ];

  const mes = [
    { value: "1", label: "Janeiro" },
    { value: "2", label: "Fevereiro" },
    { value: "3", label: "Março" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Maio" },
    { value: "6", label: "Junho" },
    { value: "7", label: "Julho" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Setembro" },
    { value: "10", label: "Outubro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Dezembro" },
  ];

  const MetricaDiaConsultores = ResponseDb.map((item) => (
    <ContainerGeral>
      <ul>
        <li key={item.Consultores}>
          <OptionsContainer>
            <Avatar>
              <AvatarColor color={item.StatusColorAvatar}>
                <img src={item.AvatarConsultores} />
              </AvatarColor>
            </Avatar>
            <span>{item.Consultores}</span>
            <small>{item.dataFormatted}</small>
          </OptionsContainer>
          {/* Card Puxadas */}
          <ContainerPuxadasCarterizadas
            color={item.StatusColorPuxadasCarterizadas}
          >
            <span>Puxadas:</span>
            <h1>{item.Puxadas}</h1>
            <small>Rodada Livre</small>
          </ContainerPuxadasCarterizadas>
          {/* Card Carterizadas */}
          <ContainerPuxadasCarterizadas
            color={item.StatusColorPuxadasCarterizadas}
          >
            <span>Carterizadas:</span>
            <h1>{item.Carteirizadas}</h1>
            <small>Rodada Livre</small>
          </ContainerPuxadasCarterizadas>
          {/* Card Vistoria */}
          <Container color={item.StatusColorVistoria}>
            <span>Vistoria Realizadas:</span>
            <h1>{item.Vistorias_Realizadas}</h1>
            <small>Meta: 10 </small>
          </Container>
          {/* Card Pasta Completa */}
          <Container color={item.StatusColorPasta}>
            <span>Pasta Completa:</span>
            <h1>{item.Pastas_Completas}</h1>
            <small>Meta: 2</small>
          </Container>
          {/* Card Contratos Emitidos */}
          <Container color={item.StatusColorContratos}>
            <span>Contratos Emitidos:</span>
            <h1>{item.Contratos_Emitidos}</h1>
            <small>Meta: 1</small>
          </Container>
        </li>
      </ul>
    </ContainerGeral>
  ));

  return (
    <Layout>
      <ContentHeader title="Métricas Diárias - Lista de Consultores">
        <small>Filtrar Data :</small>
        <SelectInput
          options={dias}
          onChange={(e) => setDiaSelected(e.target.value)}
          defaultValue={diaSelected}
        />
        <SelectInput
          options={mes}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
      </ContentHeader>
      {MetricaDiaConsultores}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    guiaCadastroConsultores,
    guiaMetricaDia,
    dbMetricasConsultoresAuto,
    title,
  } = await fetch("https://ideia-unica-pi-sepia.vercel.app/api/db1")
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((resObjPromise) => resObjPromise);

  return {
    props: {
      dbMetricasConsultoresAuto,
      title,
      guiaMetricaDia,
      guiaCadastroConsultores,
    },
    revalidate: 10,
  };
};
export default ListaConsultores;
