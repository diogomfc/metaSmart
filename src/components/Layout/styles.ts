import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  padding-top: 70px;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 240px;
  @media (max-width: 768px) {
    display: none;
    flex: 0;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px); 
  overflow-y: scroll;

  ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.primary};
    }
`;
