import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
  //padding-top: 10px;
  background: ${props => props.theme.colors.secondary};
`;
export const MenuItem = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  height: 40px;

  transition: opacity .3s;
  &:hover {
    background: ${props => props.theme.colors.primary};
    opacity: .7;
  }
  > span {
    font-weight:200;
    margin-left: 13px;
    font-size: 20px;
    line-height: 60px;
    color: ${props => props.theme.colors.gray};
  }

  > img {
    width: 20px;
    height: 20px;
  }
`;

export const Following = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

export const FollowingHeader = styled.div`
  //font-weight: 400;
  //font-size: 16px;
  line-height: 22px;
  color: rgba(22, 24, 35, 0.5);
  //height: 8px;
  padding-left: 16px;
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  padding-bottom: 24px;
  width: 240px;
  box-sizing: border-box;
  color: rgba(22, 24, 35, 0.5) !important;
`;

export const InfoContainerTime = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  height: 50px;
  font-size: 20px;
  background-color:#384B5A;
  color: #232835 !important;
`;

export const Links = styled.div`
  margin-bottom: 5px;

  > a {
    cursor: pointer;
    display: inline-block;
    margin-right: 5px;
    margin-top: 5px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #255C65;
    font-family: 'proxima-semibold', PingFangSC, sans-serif;
    :hover {
      text-decoration: underline;
    }
  }
`;
