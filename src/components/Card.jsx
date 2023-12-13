import { useFetch } from "../hooks/useFetch";
import { Container, List, ListItem } from "@mui/material";
import { ButtonNext } from "./ButtonNext";

export const Card = ({ id, getRandomNumber }) => {
  const { character } = useFetch(
    `https://thronesapi.com/api/v2/Characters/${id}`
  );

  return (
    <>
      <img
       className= "logo"
        src="src\assets\Game-Of-Thrones-PNG-Images-HD.png"
        alt="image"
      />
     
      <Container
        sx={{
          border: 3,
          borderColor: "#7D7D52",
          width: "510px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "rgba(59, 75, 77, 0.8)",
          opacity: 0.8,
          borderRadius: 2,
          boxShadow: "5px 5px 5px #FF9625",
          // border: "10px ridge",
        }}
      >
        {
          <List>
            <ListItem>
              {<img src={character?.imageUrl} alt={character?.image} />}
            </ListItem>

            <ListItem>
              <b>Nombre Completo:</b> {character?.fullName}
            </ListItem>

            <ListItem>
              <b>Primer Nombre:</b> {character?.firstName}
            </ListItem>

            <ListItem>
              <b>Apellido:</b> {character?.lastName}
            </ListItem>

            <ListItem>
              <b>Título:</b> {character?.title}
            </ListItem>

            <ListItem>
              <b>Familia:</b> {character?.family}
            </ListItem>
          </List>
        }

        <ButtonNext getRandomNumber={getRandomNumber} />
      </Container>
    </>
  );
};
