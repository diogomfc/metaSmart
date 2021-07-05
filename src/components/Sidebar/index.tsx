import Link from "next/link";

import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  InfoContainerTime,
  Links,
} from "./styles";

function Sidebar() {
  return (
    <Container>
      <InfoContainerTime>Patronum</InfoContainerTime>
      <MenuItem>
        <img src="/images/IconDashborard.svg"></img>
        <Link href="/Admin/metricasDiaTime">
          <span>Dashboard time</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src="/images/IconMetricasDia.svg"></img>
        <Link href="/Users/metricasDia">
          <span>Métricas dia</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src="/images/IconMetricasMes.svg"></img>
        <Link href="/Users/metricasMes">
          <span>Métricas mês</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src="/images/IconNovoRegistro.svg"></img>
        <Link href="/Users/novoRegistro">
          <span>Novo registro</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src="/images/IconRelatorio.svg"></img>
        <Link href="/Users/relatorios">
          <span>Relatórios</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <img src="/images/IconSair.svg"></img>
        <Link href="/sobre">
          <span>Sair</span>
        </Link>
      </MenuItem>
      <Following>
        <FollowingHeader></FollowingHeader>
      </Following>
      <InfoContainer>
        <Links>
          <a>Ajuda</a>
        </Links>
        <Links>
          <a>Sugestões</a>
        </Links>
        <Links>
          <a>Privacidade</a>
        </Links>
        <Links>
          <a>© 2021 Meta Smart</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}

export default Sidebar;
