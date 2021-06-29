import Header from '../Header1';
import Sidebar from '../Sidebar';
import { Container, SidebarContainer, ContentContainer } from './styles';

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layout;
