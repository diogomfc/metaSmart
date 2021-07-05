import React from "react";

import { Container, Tag, Content } from "./styles";

interface IHistoryCard {
  tagColor: string;
  tagIcon: string;
  imgTag: string;
  nomeCliente: string;
  description: string;
  status: string;
}

const HistoryCard: React.FC<IHistoryCard> = ({
  tagColor,
  tagIcon,
  imgTag,
  nomeCliente,
  description,
  status,
}) => (
  <Container>
    <Content>
      <Tag color={tagColor} />
      <img src={imgTag} />
      <span>{tagIcon}</span>
      <small>{nomeCliente}</small>
      <small>{description}</small>
      <h3>{status}</h3>
    </Content>
  </Container>
);

export default HistoryCard;
