import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Lista = () => {
  const conciliaciones = useSelector((state) => state.buscarConciliacion); console.log(conciliaciones);
  const fuentes = useSelector((state) => state.buscarFuentes); console.log(fuentes);
  const usuarios = useSelector((state) => state.buscarUsuarios); console.log(usuarios);
  const tableros = useSelector((state) => state.buscarTableros); console.log(tableros);


  return (
    <>
    <Grid container>
      <Grid item md={3} xs={12}>
        <Box m="10px" p="10px" border={1}>
          <h1>Conciliaciones</h1>
          {conciliaciones.map((item) => <h2 key={item._id}>{item.conciliationName}</h2>)}
        </Box>
      </Grid>
      <Grid item md={3} xs={12}>
        <Box m="10px" p="10px" border={1}>
          <h1>Fuentes</h1>
          {fuentes.map((item) => <h2 key={item._id}>{item.name}</h2>)}
        </Box>
      </Grid>
      
      <Grid item md={3} xs={12}>
        <Box m="10px" p="10px" border={1}>
          <h1>Usuarios</h1>
          {usuarios.map((item) => <h2 key={item._id}>{item.name.firstName}</h2>)}
        </Box>
      </Grid>
      <Grid item md={3} xs={12}>
        <Box m="10px" p="10px" border={1}>
          <h1>Tableros</h1>
          {tableros.map((item) => <h2 key={item._id}>{item.dashboardName}</h2>)}
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default Lista;
