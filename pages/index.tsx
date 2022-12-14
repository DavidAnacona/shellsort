import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Html } from 'next/document'
import Head from 'next/head'
import { red, deepPurple, green, blue, deepOrange} from '@mui/material/colors';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import MessageIcon from '@mui/icons-material/Message';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import Funcionamiento from "./components/funcionamiento/index";
import { useState } from 'react';

export default function Home() {

  const [funcionamiento, setFuncionamiento] =  useState(false);


  return (
    <>
      <Head>
        <title>Shellsort</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Stack flexDirection={"row"} sx={{background: "#a8d0e6"}}>
        <Stack sx={{ width: "70vw", height: "100vh", background: "#a8d0e6", flexDirection: "column-", justifyContent: "center", alignItems: "center"}}>
          <Typography variant='h1' sx={{color: "#0D0A0B", fontWeight: "700" , fontFamily: "Roboto Mono", letterSpacing: "8px", fontSize: {xs: "70px", md: "90px", lg: "140px"}, marginBottom: {xs: "30px", md: "20px", lg: "50px"}}}>Shellsort</Typography>
          <Typography sx={{ width: {xs: "400px", md: "600px", lg: "1300px"}, textAlign: "center", fontSize: {xs: "15px", md: "23px", lg: "28px"}, fontFamily: "Roboto Mono", letterSpacing: "4px", marginBottom: {xs: "30px", md: "20px", lg: "30px"}}}>El método se denomina Shell en honor de su inventor Donald Shell. El método ShellSort es una generalización del ordenamiento por inserción, teniendo en cuenta las generalidades:</Typography>
          <List sx={{ width: '100%', bgcolor: '#a8d0e6'}} aria-label="contacts">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LaptopWindowsIcon sx={{ color: green[700] }} classes/>
                </ListItemIcon>
                <ListItemText><Typography sx={{ fontFamily: "Roboto Mono", fontWeight: "700", fontSize: {xs: "", md: "18px", lg: "23px"} , letterSpacing: "4px" }}>El ordenamiento por inserción es eficiente si la entrada está “casi ordenada”.</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FingerprintRoundedIcon sx={{ color: red[600] }} />
                </ListItemIcon>
                <ListItemText><Typography sx={{ fontFamily: "Roboto Mono", fontWeight: "700", fontSize: {xs: "", md: "18px", lg: "23px"} , letterSpacing: "4px" }}>El ordenamiento por inserción es ineficiente, en general, porque mueve los valores sólo una posición cada vez.</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MessageIcon  sx={{ color: deepPurple[500] }}/>
                </ListItemIcon>
                <ListItemText><Typography sx={{ fontFamily: "Roboto Mono", fontWeight: "700", fontSize: {xs: "", md: "18px", lg: "23px"} , letterSpacing: "4px" }}>Usando los incrementos de Shell que comienzan con 1/2 del tamaño del vector y se dividen por 2 cada vez.</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CardGiftcardIcon  sx={{ color: blue[600] }}/>
                </ListItemIcon>
                <ListItemText><Typography sx={{ fontFamily: "Roboto Mono", fontWeight: "700", fontSize: {xs: "", md: "18px", lg: "23px"} , letterSpacing: "4px" }}>Debe su nombre al ingeniero y matemático estadounidense Donald Shell que lo publicó en la revista Communications Of the ACM en 1959.</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NextWeekIcon  sx={{ color: deepOrange[500] }}/>
                </ListItemIcon>
                <ListItemText><Typography sx={{ fontFamily: "Roboto Mono", fontWeight: "700", fontSize: {xs: "", md: "18px", lg: "23px"} , letterSpacing: "4px" }}>Coste computacional: promedio O(n<sup>3/2</sup>) - Mejor caso O(<i>n</i> log <i>n</i>)   <br /> - Peor caso O(n<sup>2</sup>)</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <Funcionamiento estado={funcionamiento} cambiarEstado={setFuncionamiento} />
        </Stack>
        <Stack flexDirection={"column"}>
          <Stack sx={{width: "30vw", height: "50vh", background: "#f76c6c", borderBottomLeftRadius: "40px", borderTopLeftRadius: "40px", cursor: "pointer"}} onClick={() => setFuncionamiento(!funcionamiento)} ></Stack>
          <Stack sx={{width: "30vw", height: "50vh", background: "#263366" , borderBottomLeftRadius: "40px", borderTopLeftRadius: "40px"}}></Stack>
        </Stack>
      </Stack>
      </>
  )
}
