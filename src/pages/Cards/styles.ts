import styled, {keyframes} from 'styled-components';

// interface IContainerProps {
//     color: string;
// }
export const ContainerGeral= styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content: center;
`

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
    }
`;

export const Container = styled.div`
    width: 15%;
    height: 120px;

    margin: 10px 0;
    padding: 10px 10px;

.statusPositivoCards{
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: #353a49;
   
    border: 1px solid #51a888;
    box-shadow: 0px 0px 5px 0px #2ecc71;
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > h1 {
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 60px;
      color: #51a888;
      top: 0;
      bottom: 0;
    }
    
    > span {
        top:5px;
        color: #51a888;
        font-size: 12px;
        font-weight: 500;
        position: absolute;
    }

    > small {
        color: #fff;
        font-size: 10px;
        position: absolute;
        bottom: 10px;
    }



    @media(max-width: 770px){
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            
            strong {
                position: initial;        
                width: auto;
                font-size: 22px;
            }

            strong:after {
                display: inline-block;
                content: '';
                width: 1px;                
            }
        }
    }
}
.statusNegativoCards{
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: #353a49;
   
    border: 1px solid #f23947;
    box-shadow: 0px 0px 5px 0px #f23947;
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > h1 {
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 60px;
      color: #f23947;
      top: 0;
      bottom: 0;
    }
    
    > span {
        top:5px;
        color: #f23947;
        font-size: 12px;
        font-weight: 500;
        position: absolute;
    }

    > small {
        color: #fff;
        font-size: 10px;
        position: absolute;
        bottom: 10px;
    }



    @media(max-width: 770px){
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            
            strong {
                position: initial;        
                width: auto;
                font-size: 22px;
            }

            strong:after {
                display: inline-block;
                content: '';
                width: 1px;                
            }
        }
    }
}
`;

export const ContainerPuxadasCarterizadas = styled.div`
    width: 10%;
    height: 120px;

    margin: 10px 0;
    padding: 10px 0px;
    padding-right: 10px;

.statusPositivoCards1{
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: #353a49;
   
    border: 1px solid #7584A6;
    //box-shadow: 0px 0px 5px 0px #7584A6;
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > h1 {
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 60px;
      color: #7584A6;
      top: 0;
      bottom: 0;
    }
    
    > span {
        top:5px;
        color: #7584A6;
        font-size: 12px;
        font-weight: 500;
        position: absolute;
    }

    > small {
        color: #7584A6;
        font-size: 10px;
        position: absolute;
        bottom: 10px;
    }



    @media(max-width: 770px){
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            
            strong {
                position: initial;        
                width: auto;
                font-size: 22px;
            }

            strong:after {
                display: inline-block;
                content: '';
                width: 1px;                
            }
        }
    }
}
.statusNegativoCards1{
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: #353a49;
   
    border: 1px solid #f23947;
    box-shadow: 0px 0px 5px 0px #f23947;
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;

    > h1 {
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 60px;
      color: #f23947;
      top: 0;
      bottom: 0;
    }
    
    > span {
        top:5px;
        color: #f23947;
        font-size: 12px;
        font-weight: 500;
        position: absolute;
    }

    > small {
        color: #fff;
        font-size: 10px;
        position: absolute;
        bottom: 10px;
    }



    @media(max-width: 770px){
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;
            
            strong {
                position: initial;        
                width: auto;
                font-size: 22px;
            }

            strong:after {
                display: inline-block;
                content: '';
                width: 1px;                
            }
        }
    }
}
`;


export const OptionsContainer = styled.div`
    width: 10%;
    height: 90px;

    margin: 10px 10px;
    padding: 10px 0px;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    > span{
        margin-top: -10px;
        color: white;
        display: flex; 

        animation: ${animate} .5s; 
    }
`;
export const Avatar = styled.div`
   display: flex;
   align-items: center;

  > img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .statusAvatarPositivo{
    display: flex;
    justify-content: center;

    width: 90px;
    height: 90px;
    background-color: #2ecc71;
   
    border: 3px solid #2ecc71;
    box-shadow: 0px 0px 5px 0px #2ecc71;
    border-radius: 50%;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;
  }
  .statusAvatarNegativo{
    display: flex;
    justify-content: center;

    width: 90px;
    height: 90px;
    background-color: #f23947;
   
    border: 3px solid #f23947;
    box-shadow: 0px 0px 5px 0px #f23947;
    border-radius: 50%;

    position: relative;
    overflow: hidden;

    animation: ${animate} .5s;
  }
`;

