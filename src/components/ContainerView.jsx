import { useState} from "react";
import { Card } from "./";

export const ContainerView = () => {
// Variable que almacena un numero aleatorio
  const numRandom =  Math.floor(Math.random() * 52)
  // hook para actualizar el valor de number, inicializandolo con la variable numRandom 
  const [number, setNumber] = useState(numRandom)
  // Funcion seteadora para cambiar el personaje
  const getRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 52))
  }



  return (
    <>
    {/* Componente que recibe como props id para obtener el personaje de la api y la función getRandomNumber */}
      <Card 
        id={ number } 
        getRandomNumber={ getRandomNumber }  
      />
      
    </>
  );
};