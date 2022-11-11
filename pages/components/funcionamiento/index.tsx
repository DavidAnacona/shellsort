import { Box, Stack, Typography} from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {  red, deepPurple, green, blue, deepOrange } from "@mui/material/colors";


const Funcionamiento = ({estado, cambiarEstado}: {estado: boolean, cambiarEstado: any}) => {
  return (
    <>
        {estado &&
      <Box sx={{width: "100vw",height: "100vh",position: "fixed",top: "0",left: "0",background: "rgba(0,0,0,.2)",display: "flex",alignItems: "center",justifyContent: "center",padding: "40px"}}>
        <Stack sx={{border: "1px solid #f76c6c", width: "70vw",height: "70vh",background: "#f76c6c",position: "relative",borderRadius: "5px",padding: "20px", justifyContent: "center", alignItems: "center"}}>
            <Typography variant='h1' sx={{color: "#F8F7F7", fontWeight: "700" , fontFamily: "Roboto Mono", letterSpacing: "5px", fontSize: {xs: "70px", md: "90px", lg: "60px"}, marginBottom: {xs: "30px", md: "20px", lg: "50px"}}}>Funcionamiento Shellsort</Typography>

          <Stack sx={{justifyContent: "center",alignItems: "center",width: "30px",height: "30px",border: "none",background: "none",cursor: "pointer",transition: ".3s ease all",borderRadius: "5px",color: "#1766DC",position: "absolute",top: "15px",right: "15px",":hover": { background: "#f2f2f2" }}} onClick={() => cambiarEstado(false)}>
            <CloseRoundedIcon sx={{ color: deepPurple[900], width: "100%", height: "100%" }}/>
          </Stack>
        </Stack>
      </Box>
      }
    </>
  );
};

export default Funcionamiento;
