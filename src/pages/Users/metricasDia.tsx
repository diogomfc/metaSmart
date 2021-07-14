import { GetStaticProps } from "next";
import React, { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

import Layout from "../../components/Layout";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/select";
import HistoryCard from "../../components/HistoryCard";

import ConexaoDb from "../../utils/conexaoDB";
import formatDate from "../../utils/formatDate";
import listOfMonths from "../../utils/months";

import {
  Container,
  ContainerPuxadasCarterizadas,
  OptionsContainer,
  Avatar,
  AvatarColor,
  ContainerGeral,
  ConnectBaseDados,
  ListaClientes,
  TagIconListaClientes,
} from "../../styles/stylesUsers/stylesMetricasDia";

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
  data: string;
  img: string;
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

//Guia Historico Clientes dia
interface IGuiaHistoricoClientesDia {
  Consultores: string;
  Cliente: string;
  Descricao: string;
  Status: string;
  Originacao: string;
  obs: string;
  Data: string;
}

interface IdbMetricasConsultoresAutoProps {
  dbMetricasConsultoresAuto: IListaConsultoresAuto[];
  title: IdbMetricasTitle;
  guiaMetricaDia: IMetricasDias[];
  guiaCadastroConsultores: ICadastroConsultores[];
  guiaHistoricoClientesDia: IGuiaHistoricoClientesDia[];
}

function Cards(props: IdbMetricasConsultoresAutoProps) {
  const GuiaMetricaDia = props.guiaMetricaDia;
  const CadastroConsultores = props.guiaCadastroConsultores;
  const HistoricoClienteDia = props.guiaHistoricoClientesDia;
  const TagIconPasta = "/images/IconPasta.svg";
  const TagIconVistoria = "/images/IconVistoria.svg";

  const ListaCadastroConsultores = HistoricoClienteDia.map((item) => {
    return {
      id: uuid(),
      Consultores: item.Consultores,
      Cliente: item.Cliente,
      Status: item.Status,
      Descricao: item.Descricao,
      Originacao: item.Originacao,
      obs: item.obs,
      Data: item.Data,
      TagCorClientes: item.Status === "Aprovado" ? "#2ECC71" : "#F84F6B",
      TagIconClientes: String(
        item.Descricao === "Vistoria Realizadas"
          ? "/images/IconVistoria.svg"
          : "/images/IconPasta.svg"
      ),
    };
  });

  //------ FILTROS POR DATAS ------
  //Mês
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  //Ano
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );
  //Dia
  const [diaSelected, setDiaSelected] = useState<string>(
    String(new Date().getDate())
  );

  const [consultorSelected, setConsultorSelected] = useState<string>("");

  //filtros por data
  const filteredData = GuiaMetricaDia.filter((item) => {
    const date = new Date(item.Data);
    const dia = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());

    const consultorNome = item.Consultores;

    return (
      consultorNome === consultorSelected &&
      dia === diaSelected &&
      month === monthSelected &&
      year === yearSelected
    );
  });

  const filteredCadastro = CadastroConsultores.filter((item) => {
    const consultorNome = item.Login_Consultores;

    return consultorNome === consultorSelected;
  });

  const filteredHistoricoClientes = ListaCadastroConsultores.filter((item) => {
    const date = new Date(item.Data);
    const dia = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());

    const consultorNome = item.Consultores;

    return (
      consultorNome === consultorSelected &&
      dia === diaSelected &&
      month === monthSelected &&
      year === yearSelected
    );
  });

  const ResponseDb = filteredData.map((item) => {
    return {
      id: uuid(),
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

  const ano = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const nomeConsultoresAuto = [
    { value: " ", label: "Selecionar consultor" },
    { value: "Agatha Mayara", label: "Agatha Mayara" },
    { value: "Brahiam Calda", label: "Brahiam Calda" },
    { value: "Camila Almeida", label: "Camila Almeida" },
    { value: "Diogo Silva", label: "Diogo Silva" },
    { value: "Hugo Melo", label: "Hugo Melo" },
    { value: "Julia Andriani", label: "Julia Andriani" },
    { value: "Ricardo Felippe", label: "Ricardo Felippe" },
    { value: "Tamyres Rodrigues", label: "Tamyres Rodrigues" },
    { value: "Thiago Vinicius", label: "Thiago Vinicius" },
  ];

  const relacaoTime = [
    { value: "Patronum", label: "Patronum" },
    { value: "Hydra", label: "Hydra" },
    { value: "Grifinória", label: "Grifinória" },
    { value: "Pandora", label: "Pandora" },
    { value: "Corvinal", label: "Corvinal" },
    { value: "Fenix", label: "Fênix" },
    { value: "BigBang", label: "Big Bang" },
    { value: "Pegasus", label: "Pegasus" },
    { value: "Orion", label: "Orion" },
    { value: "Falcon", label: "Falcon" },
    { value: "Draco", label: "Draco" },
    { value: "Poseidon", label: "Poseidon" },
    { value: "Cabulosos", label: "Cabulosos" },
    { value: "Horus", label: "Horus" },
    { value: "Atena", label: "Atena" },
    { value: "Zeus", label: "Zeus" },
    { value: "Sonserina ", label: "Sonserina" },
  ];

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  //console.log(ano);

  const MetricaDiaConsultores = ResponseDb.map((item) => (
    <ContainerGeral>
      <OptionsContainer>
        <Avatar>
          <AvatarColor color={item.StatusColorAvatar}>
            {filteredCadastro.map((item) => (
              <img src={item.AvatarConsultores} />
            ))}
          </AvatarColor>
        </Avatar>
        <span>{item.Consultores}</span>
        <small>{item.dataFormatted}</small>
      </OptionsContainer>
      {/* Card Puxadas */}
      <ContainerPuxadasCarterizadas color={item.StatusColorPuxadasCarterizadas}>
        <span>Puxadas:</span>
        <h1>{item.Puxadas}</h1>
        <small>Rodada Livre</small>
      </ContainerPuxadasCarterizadas>
      {/* Card Carterizadas */}
      <ContainerPuxadasCarterizadas color={item.StatusColorPuxadasCarterizadas}>
        <span>Carterizadas:</span>
        <h1>{item.Carteirizadas}</h1>
        <small>Meta: 10</small>
      </ContainerPuxadasCarterizadas>
      {/* Card Vistoria em Regulação */}
      <Container color={item.StatusColorVistoria}>
        <span>Vistoria Realizadas:</span>
        <h1>{item.Vistorias_Realizadas}</h1>
        <small>Meta: 3</small>
      </Container>
      {/* Card Vistoria Aprovada */}
      <Container color={item.StatusColorPasta}>
        <span>Pasta Completa:</span>
        <h1>{item.Pastas_Completas}</h1>
        <small>Meta: 2</small>
      </Container>
      {/* Card Pasta Completa */}
      <Container color={item.StatusColorContratos}>
        <span>Contratos Emitidos:</span>
        <h1>{item.Contratos_Emitidos}</h1>
        <small>Meta: 1</small>
      </Container>
    </ContainerGeral>
  ));

  return (
    <Layout>
      <ConnectBaseDados>Base de dados: {props.title}</ConnectBaseDados>
      <ContentHeader title="Métricas Diárias">
        <small>Filtrar:</small>
        <SelectInput
          options={relacaoTime}
          onChange={() => {}}
          defaultValue={diaSelected}
        />
        <SelectInput
          options={nomeConsultoresAuto}
          onChange={(e) => setConsultorSelected(e.target.value)}
          defaultValue={diaSelected}
        />
        <small>Data :</small>
        <SelectInput
          options={dias}
          onChange={(e) => setDiaSelected(e.target.value)}
          defaultValue={diaSelected}
        />
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={ano}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <div>
        <ContainerGeral>{MetricaDiaConsultores}</ContainerGeral>
        <ListaClientes>Lista de clientes do dia</ListaClientes>
        {filteredHistoricoClientes.map((item) => (
          <HistoryCard
            key={item.id}
            tagColor={item.TagCorClientes}
            imgTag={item.TagIconClientes}
            tagIcon={item.Descricao}
            nomeCliente={item.Cliente}
            description={item.Originacao}
            status={item.Status}
            linkMDO={item.obs}
          />
        ))}
      </div>
    </Layout>
  );
}

//Conexão com a base de dados
export const getStaticProps: GetStaticProps = async () => {
  let nomeBanco = ConexaoDb;

  const {
    guiaCadastroConsultores,
    guiaMetricaDia,
    dbMetricasConsultoresAuto,
    title,
    guiaHistoricoClientesDia,
  } = await fetch(nomeBanco)
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
      guiaHistoricoClientesDia,
    },
    revalidate: 10,
  };
};

export default Cards;
