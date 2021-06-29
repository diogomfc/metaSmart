import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  ContainerPerfil,
  Icon,
  Avatar,
} from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          {/* <LogoIcon src='/images/logoIcon.svg'></LogoIcon> */}
          <Logo src='/images/LogoSmart.svg'></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src='/images/uploadIcon.svg'></Icon>
          <Avatar>
            <img src='https://ca.slack-edge.com/T02CW8PH8-U01MDDAEFU4-fbf8a8626100-48' />
          </Avatar>
          <ContainerPerfil>
            <span>Diogo Silva</span>
          </ContainerPerfil>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
