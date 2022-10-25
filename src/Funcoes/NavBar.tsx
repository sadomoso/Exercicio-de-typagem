import { Grid,Button, ButtonBase, ButtonGroup, Stack, Box } from "@mui/material";
import { color } from "@mui/system";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
export default function Navbar() {
  return (
    <header >
      <Box sx={{ width: '100%' }}>
     <Stack direction="row" justifyContent={'center'} spacing={'30%'}  bgcolor={'grey' } color='white' height='80px'>
      
     <Button href="/" color='inherit' variant="outlined">
          Home 
        </Button>

      <Button  href="/" color='inherit' variant="outlined">
         Titulo
        </Button>

        <Button variant="outlined" color='inherit'  href="/inscricao" >
           inscreva-se 
        </Button>

        
      </Stack>
      </Box>
    </header>
  );
}