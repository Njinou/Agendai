//get the number of day in a month..
export const  daysInThisMonth =(date)=> {
 return new Date(date.getFullYear(), now.getMonth()+1, 0).getDate();
}

/*
//rgb(0,128,0) => 
//	255, 255, 0
//	255, 0, 0
*/
export const  getColor =(i: number,NUM_ITEMS:number)=> {
    const multiplier = 255 / (NUM_ITEMS);
    const colorVal = i * multiplier;
   
    const moitie = 128  *i / NUM_ITEMS;
    const decr = 255 -  2 * (i -NUM_ITEMS/2 ) * multiplier ;
    return `rgb(${colorVal <=255? 2*colorVal: 255}, ${i <= NUM_ITEMS/2? 128 + moitie: decr}, ${0})`;
  }
  
  export default {getColor,daysInThisMonth};