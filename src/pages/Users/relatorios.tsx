import React from "react";

import { Container } from "../../styles/stylesUsers/styledDasboard";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import Layout from "../../components/Layout";

const Dashboard: React.FC = () => {
  const options = [{ value: "Diogo", label: "Diogo Silva" }];

  return (
    <Layout>
      <Container>
        <ContentHeader title="Relatórios">
          <SelectInput options={options} onChange={() => {}} />
        </ContentHeader>
        <div>dashboard</div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
