import React from "react";

import { Container } from "../../styles/stylesUsers/styledDasboard";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/select";
import Layout from "../../components/Layout";

const Dashboard: React.FC = () => {
  const options = [
    { value: "janeiro", label: "Janeiro" },
    { value: "fevereiro", label: "Fevereiro" },
    { value: "marco", label: "Março" },
  ];

  return (
    <Layout>
      <Container>
        <ContentHeader title="Métricas mês">
          <SelectInput options={options} onChange={() => {}} />
        </ContentHeader>
        <div>dashboard</div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
