import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

margin-bottom: 15px;

`;
export const TitleContainer = styled.div`

> h1 {
    color: ${props => props.theme.colors.border};
    font-size: 20px;
}
`;
export const Controllers = styled.div`
display: flex;
justify-content: center;
align-items: center;

color: ${props => props.theme.colors.border};
`;
