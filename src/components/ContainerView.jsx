import { useState} from "react";
import { Card } from "./";

export const ContainerView = () => {

  const numRandom =  Math.floor(Math.random() * 52) 
  const [number, setNumber] = useState(numRandom)
  
  const getRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 52))
  }



  return (
    <>

      <Card 
        id={ number } 
        getRandomNumber={ getRandomNumber }  
      />
      
    </>
  );
};