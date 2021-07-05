import React from "react";

import { Container } from "../../styles/stylesUsers/styledDasboard";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Diogo", label: "Diogo Silva" },
    { value: "Davi", label: "Davi Lucca" },
    { value: "Jessica", label: "Jessica" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
      <div>dashboard</div>
    </Container>
  );
};

export default Dashboard;
