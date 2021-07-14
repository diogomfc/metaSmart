import styled, {keyframes} from 'styled-components';
interface IStatusColorProps {
    color: string;
  }

const animate = keyframes`
0%{
    transform: translateX(100px);
    opacity: 0;
}
50%{     
    opacity: .3;
}
100%{
    transform: translateX(0px);
    opacity: 1;
};
`;


export const ContainerCardResumoTime = styled.div`
display:flex;
padding-left: 15px;
//width:90%;
justify-content: center;
flex-direction: row;
`;

export const CardResumoTime  = styled.div<IStatusColorProps>`
display: flex;
justify-content: center;


width: 14%;
height: 90px;
margin: 6px 10px;

background-color: ${props => props.theme.colors.secondary};

border: 1px solid ${props => props.color};
box-shadow: 0px 0px 5px 0px ${props => props.color};
border-radius: 7px;

position: relative;
overflow: hidden;

animation: ${animate} .5s;

> h1 {
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 50px;
  color: ${props => props.color};
  top: 0;
  bottom: 0;
}

> span {
    top:5px;
    color: ${props => props.color};
    font-size: 11px;
    font-weight: 500;
    position: absolute;
}

> small {
    color: ${props => props.theme.colors.white};
    font-size: 10px;
    position: absolute;
    bottom: 5px;
}

@media(max-width: 770px){
    > span {
        font-size: 12px;
        display: flex;
        align-items: center;
        text-align: center;
    };

    > h1 {
        display: flex;
        display: flex;
        align-items: center;
        position: absolute;
        font-size: 60px;
        color: ${props => props.color};
        top: 0;
        bottom: 0;
    }
};

`;

export const ConnectBaseDados = styled.small`
color: ${props => props.theme.colors.secondary};
font-size: 12px;
`;


export const ContainerGeral = styled.div`

>ul li {
  display: flex;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

>ul{
    padding-inline-start: 0px;
}

`;

export const Container = styled.div<IStatusColorProps>`
    display: flex;
    justify-content: center;

    width: 15%;
    height: 120px;
    margin: 10px 10px;
    
    background-color: ${props => props.theme.colors.secondary};
   
    border: 1px solid ${props => props.color};
    box-shadow: 0px 0px 5px 0px ${props => props.color};
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > h1 {
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 60px;
      color: ${props => props.color};
      top: 0;
      bottom: 0;
    }
    
    > span {
        top:5px;
        color: ${props => props.color};
        font-size: 12px;
        font-weight: 500;
        position: absolute;
    }

    > small {
        color: ${props => props.theme.colors.white};
        font-size: 10px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px){
        > span {
            font-size: 12px;
            display: flex;
            align-items: center;
            text-align: center;
        };

        > h1 {
            display: flex;
            display: flex;
            align-items: center;
            position: absolute;
            font-size: 60px;
            color: #51a888;
            top: 0;
            bottom: 0;
        }
    };

`;

export const ContainerPuxadasCarterizadas = styled.div<IStatusColorProps>`
    display: flex;
    justify-content: center;

    width: 10%;
    height: 120px;

    margin: 10px 0;
    margin-left: 3px;

    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.color};
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > h1 {
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 60px;
      color: ${props => props.color};
      top: 0;
      bottom: 0;
    };
    
    > span {
        top:5px;
        color: ${props => props.theme.colors.border};
        font-size: 12px;
        font-weight: 500;
        position: absolute;
    };

    > small {
        color: ${props => props.theme.colors.border};
        font-size: 10px;
        position: absolute;
        bottom: 10px;
    };

`;


export const OptionsContainer = styled.div`
    width: 15%;
    height: 140px;

    padding: 10px;
    
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    

    > span{
        width: 100%;
        
        color: white;
        padding: 5px;
    
        animation: ${animate} .5s; 
    };
    >small{
        font-size: 8px;
        color: ${props => props.theme.colors.border};
        animation: ${animate} .5s;
    }
`;


export const OptionsContainerResumoTime = styled.div`
    //width: 14%;
    height: 120px;

    //padding-right: 5px;
    
    display: flex;
    //align-items: center;
    //text-align: center;
    flex-direction: column;

    

    > span{
        width: 100%;
        
        color: white;
        //padding: 5px;
      

        animation: ${animate} .5s; 
    };
    >small{
        font-size: 8px;
        color: ${props => props.theme.colors.border}
    }
`;


export const AvatarColor = styled.div<IStatusColorProps>`
    display: flex;
    justify-content: center;

    width: 80px;
    height: 80px;
    background-color: ${props => props.color};
   
    border: 3px solid ${props => props.color};
    box-shadow: 0px 0px 5px 0px ${props => props.color};
    border-radius: 50%;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;
`;

export const Avatar = styled.div`
   display: flex;
   align-items: center;

  > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  };
`;


export const AvatarColorTL = styled.div<IStatusColorProps>`
    display: flex;
    justify-content: center;

    width: 80px;
    height: 80px;
    background-color: ${props => props.color};
   
    border: 3px solid ${props => props.color};
    box-shadow: 0px 0px 5px 0px ${props => props.color};
    border-radius: 50%;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;
`;

export const AvatarTL = styled.div`
   display: flex;
   align-items: center;
   

  > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  };
`;
