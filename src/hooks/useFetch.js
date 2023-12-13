import { useEffect, useState } from "react";


export const useFetch = (url) => {
    // Estado que tiene como valor inicial null
    const [character, setCharacter] = useState(null)
    // Función asíncrona que hace una peticion a la url y espera la respuesta que se convierte en 
    // objeto JSON y llama la función seteadora con ese objeto como argumento 
    const getCharacters = async() =>{
        const resp = await fetch(url)
        const data  = await resp.json()

        setCharacter(data)
    }
    // ejecutar la función cada vez que la url cambie
    useEffect(() => {
      getCharacters()
    }, [url])


    return {
        character
    }



}
