import React from "react";

import { Container, Tag, Content } from "./styles";

interface IHistoryCard {
  tagColor: string;
  tagIcon: string;
  imgTag: string;
  nomeCliente: string;
  description: string;
  status: string;
  linkMDO: string;
}

const HistoryCard: React.FC<IHistoryCard> = ({
  tagColor,
  tagIcon,
  imgTag,
  nomeCliente,
  description,
  status,
  linkMDO,
}) => (
  <Container>
    <Content>
      <Tag color={tagColor} />
      <a href={linkMDO} target="_blank">
        <img src={imgTag} />
      </a>
      <span>{tagIcon}</span>
      <a href={linkMDO} target="_blank">
        <small>{nomeCliente}</small>
      </a>
      <small>{description}</small>
      <h3>{status}</h3>
    </Content>
  </Container>
);

export default HistoryCard;
