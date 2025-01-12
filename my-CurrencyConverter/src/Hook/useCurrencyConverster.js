import { useEffect, useState } from "react";

 



 function useCurrencyConverter(currency){
    const[data,sedata]=useState({});
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      .then((response)=> response.json()).then((response)=>sedata(response[currency]))
     
    },[currency])
   return data;
 }

 
 export default useCurrencyConverter;