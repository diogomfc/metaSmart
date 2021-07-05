import React, { useMemo } from "react";

import emojis from "../../utils/emojis";

import {
  Container,
  Content,
  LogoContainer,
  UserEmail,
  UserName,
  Logo,
  OptionsContainer,
  ContainerPerfil,
  Icon,
  Avatar,
} from "./styles";

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src="/images/LogoSmart.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Avatar>
            <img src="https://ca.slack-edge.com/T02CW8PH8-U01MDDAEFU4-d94cf229da50-192" />
          </Avatar>
          <ContainerPerfil>
            <UserName>Olá, Diogo Silva {emoji}</UserName>
            <UserEmail>diogo.silva@creditas.com</UserEmail>
          </ContainerPerfil>
          <Icon src="/images/SinoAlerta.svg"></Icon>
        </OptionsContainer>
      </Content>
    </Container>
  );
};

export default Header;
