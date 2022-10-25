import style from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Grid, Button,IconButton, ButtonBase, ButtonGroup, Typography  } from "@mui/material";
import { Box, color, Stack} from "@mui/system";

//criando uma interface para as informações da api do banco
interface IUsuario {
  id: number;
  usuario: string;
  email: string;
  senha: string;
  adm: boolean;
}

export default function Home() {
  //executar a funçãi puxar dados somente uma vez
  useEffect(() => {
    puxardados();
  }, []);

  //coletor de dados
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

  //conectando ao url e passando os dados armazenado no data
  async function puxardados() {
    const dados = await axios.get("http://localhost:5000/cadastrados");
    setUsuarios(dados.data);
  }
  const deletar = (id : number) => {
    axios.delete(`http://localhost:5000/cadastrados/${id}`);
    puxardados();
  };

  return (
    //retornando os usuarios e emails cadastrados
    <div>
      <form >
        <Grid  container  direction="column" justifyContent="center" alignItems="center" color= 'primary' textAlign={'center'}  >
        
        <Box   textAlign={'center'} justifyContent='center'  alignItems={'center'} width= '80%' >
        
        
        <ul>
          {
            //checando se possui algum usuario cadastrado
          }
          {usuarios.length === 0 ? (
            <p>Sem usuarios no momento</p>
          ) : (
            //passando por cada id e puxando os dados de email e usuario, para mostrar no home
            usuarios.map((usuario) => {
              return (
                <div key={usuario.id}>
                  <Box >
                    <fieldset>
                    <h1>Usuarios ja Cadastrados</h1>
                    <Typography >ID: {usuario.id} </Typography >
                    <p>Usuario: {usuario.usuario} </p>
                    <p>Email: {usuario.email} </p>
                    
                    {/*chamei a função deletar passando o id. OBS: '() = >' chamar somente para o conjunto ao qual se encontra!*/}
                    <Stack  direction="row"  justifyContent="space-between"  alignItems="center">
                    <IconButton color='warning'  sx={{ color: "brown" }}  onClick={() => deletar(usuario.id)}  ><DeleteIcon/></IconButton>
                   
                    <Link  to={{ pathname:`/edicao/${usuario.id}`}}><BorderColorIcon color="warning"  /></Link>
                    </Stack>
                    </fieldset>
                  </Box>
                </div>
              );
            })
          )}
        </ul>
        
        </Box>
        
        </Grid>
      </form>
    </div>
  );
}
