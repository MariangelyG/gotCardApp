import Button from '@mui/material/Button';


export const ButtonNext = ( { getRandomNumber } ) => {

  return (

    <>
        <Button 
        sx={{
          height:40, 
          width: 230, 
          margin: "auto",
          backgroundColor:"#7D7D52",
          ":hover": {backgroundColor: "#403646"},
          
        }}
        onClick={ getRandomNumber }
        variant="contained" color="secondary">
          Get Random Character
        </Button>

    </>


  )
}