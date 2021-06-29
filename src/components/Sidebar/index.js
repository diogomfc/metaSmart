import Link from "next/link";

import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  InfoContainerTime,
  Links,
} from './styles';
//import User from '../User';

function Sidebar() {
  return (
    <Container>
       <InfoContainerTime>Patronum</InfoContainerTime>
      <MenuItem>
        <img src='/images/IconDashborard.svg'></img>
        <Link href="/">
           <span>Dashborard</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src='/images/IconMetricasDia.svg'></img>
        <Link href="/Cards/cards1">
           <span>Métricas dia</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src='/images/IconMetricasMes.svg'></img>
        <Link href="/Cards/cards">
           <span>Métricas mês</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src='/images/IconNovoRegistro.svg'></img>
        <Link href="/sobre">
           <span>Novo registro</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src='/images/IconRelatorio.svg'></img>
        <Link href="/sobre">
           <span>Relatórios</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src='/images/IconSair.svg'></img>
        <Link href="/sobre">
           <span>Sair</span>
        </Link>
      </MenuItem>
      <Following>
        <FollowingHeader>-</FollowingHeader>
        {/* <User
          user={{
            name: 'Will Smith',
            username: 'willsmith',
            avatar:
              'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg',
          }}
        ></User> */}
      </Following>
      <InfoContainer>
        <Links>
          <a>Ajuda</a>
        </Links>
        <Links>
          <a>Sugestões</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>© 2021 Meta Smart</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
