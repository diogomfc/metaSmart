import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background: ${props => props.theme.colors.tertiary}; 
  border-bottom: 1px solid ${props => props.theme.colors.border}; 
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: block;
`;

export const LogoIcon = styled.img`
  width: 28px;
`;

export const Logo = styled.img`
  width: 130px;
  margin-left: 14px;
  position: relative;
  top: -2px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin: 10px;
  color: ${props => props.theme.colors.white};
`;

export const UserEmail = styled.span`
 color: ${props => props.theme.colors.border};
 font-size: 14px;
`;

export const UserName = styled.span``;


export const Icon = styled.img`
  width: 37px;
  height: 37px;
`;

export const Avatar = styled.div`
  flex: 0 0 40px;
  margin-left: 30px;
  position: relative;
  cursor: pointer;

  > img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.border};
    box-shadow: 0px 0px 5px 0px ${props => props.theme.colors.border};
  }
`;
