import styled, { keyframes } from 'styled-components';

interface ITagProps {
    color: string;
  }

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
`;

export const Content = styled.li`
    background-color: ${props => props.theme.colors.secondary};

    list-style: none;
    border-radius: 10px;

    margin: 5px 0;
    padding: 0px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    animation: ${animate} .5s ease;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > span {
        font-size: 15px;
        font-weight: 500;
        position: absolute;
        left: 60px;
    }

    > h3 {
        font-size: 15px;
        font-weight: 500;
    }

    >img{
     height: 30px;
     width: 30px;
     padding-right: 10px;
   }


`;

export const Tag = styled.div<ITagProps>`
    width: 3px;
    height: 60%;
    
    background-color: ${props => props.color};

    position: absolute;
    left: 0;
    
`;