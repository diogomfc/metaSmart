import React from "react";

import { Container, TitleContainer, Controllers } from "./styles";

interface IContentHeaderProps {
  title: string;
  children: React.ReactNode;
}

const Modelo: React.FC<IContentHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default Modelo;
