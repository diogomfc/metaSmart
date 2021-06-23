import React from 'react';

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss';
interface IContentHeaderProps {
    title: string;

}

const Header: React.FC<IContentHeaderProps> = ({
    title,
}) => {
    return (
        <div className={styles.container} >
            <div className={styles.titlecontainer}>
                <h1>{title}</h1>
            </div>
            <div className={styles.controllers} >
                <span>Teste 01</span>
            </div>
        </div>
    );
}

export default Header;

// export default function Header(){

//    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
//        locale: ptBR
//    });

//     return(
//       <header className={styles.headerContainer}>
//           <img src="/logo.svg" alt="MetaSmart" />
//           <span>Meta Smart</span>
//           <span>{currentDate}</span>
//       </header>
//     );
// }
