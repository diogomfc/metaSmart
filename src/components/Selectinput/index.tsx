import React from 'react';

import styles from './styles.module.scss';

interface ISelectInputProps {
    options:{
        value: string | number;
        label: string | number;
    }[],

    // onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    // defaultValue?: string | number;
}

// const SelectInput: React.FC <ISelectInputProps> = ({options, onChange,defaultValue }) => {
    
const SelectInput: React.FC <ISelectInputProps> = ({options}) => {
    return (
        <div className={styles.container}>
           <select>
               {
                   options.map(options =>(
                    <option 
                    key={options.value}
                    value={options.value}
                    >
                    {options.label}
                    </option>
                   ))
              }
           </select>
        </div>
    );
}

export default SelectInput;