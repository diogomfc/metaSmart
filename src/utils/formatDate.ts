const formatDate = (date: string): string => {
   const dateFormatted = new Date(date);
  
   //Ano
   const year = dateFormatted.getFullYear();
   //dia
   const day = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`
   //Mes
   const month = dateFormatted.getMonth() + 1 > 9
   ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`; 
   

   return (
      (`${day}/${month}/${year}` )
   ) 
};

export default formatDate;