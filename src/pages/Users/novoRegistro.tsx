import { GetStaticProps } from "next";
import React, { useMemo, useState, useEffect } from "react";

import {
  Container,
  Content,
} from "../../styles/stylesUsers/styledUsersNovoRegistro";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import Layout from "../../components/Layout";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import { string } from "prop-types";

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
  data: string;
  img: string;
}

interface IdbMetricasConsultoresAutoProps {
  dbMetricasConsultoresAuto: IListaConsultoresAuto[];
  title: IdbMetricasTitle;
}

interface IdbMetricasTitle {
  title: string;
}

function ListaConsultores(props: IdbMetricasConsultoresAutoProps) {
  const DbTitle = props.title;
  const DbDados = props.dbMetricasConsultoresAuto;

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
  const filteredData = DbDados.filter((item) => {
    const date = new Date(item.data);
    const dia = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();

    //console.log(dia);

    return (
      dia === diaSelected && month === monthSelected && year === yearSelected
    );
  });

  const ResponseDb = filteredData.map((item) => {
    return {
      id: item.id,
      consultor: item.consultor,
      puxadas: item.puxadas,
      carteirizadas: item.carteirizadas,
      VA: item.VA,
      VR: item.VR,
      PC: formatCurrency(Number(item.PC)),
      VRobjetivo: item.VRobjetivo,
      PCobjetivo: item.PCobjetivo,
      MetaDia: item.MetaDia,
      dataFormatted: formatDate(item.data),
      img: item.img,
      TagColor: item.PC === "1" ? "#2ECC71" : "#F84F6B",
    };
  });

  let db = true;

  const nomeConsultores = useMemo(() => {
    return db === true ? "Diogo Pereira Gomes Silva" : "Diogo";
  }, [db]);

  const lineColor = useMemo(() => {
    return db == true ? "#2ECC71" : "#F84F6B";
  }, [db]);

  const listData = useMemo(() => {
    return db === true ? DbDados : DbDados;
  }, [db]);

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

  return (
    <Layout>
      <Container>
        <ContentHeader title="Cadastro de Registro">
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
        <Content>
          {ResponseDb.map((item) => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.TagColor}
              title={item.consultor}
              subtitle={item.dataFormatted}
              amount={item.PC}
            />
          ))}
        </Content>
      </Container>
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
