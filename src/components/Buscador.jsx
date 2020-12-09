import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { buscar_texto_action } from '../redux/actions/buscarTextoAction';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Buscador = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('id');

  const changeType = (event) => {
    document.getElementById('search').value = '';
    setType(event.target.value);
    dispatch(buscar_texto_action('', type));
  };

  
  return (
    <Box  py="30px">
      <Grid container direction="row"
  justify="center"
  alignItems="center">
        <Grid item md={3}>
          <TextField type="text" id="search" placeholder="Buscar" name="search" required onChange={(e) => dispatch(buscar_texto_action(e.target.value, type))}/>
        </Grid>
        <Grid item md={3}>
          <RadioGroup aria-label="gender" name="gender1" value={type} onChange={changeType} style={{ display: 'inline' }}>
            <FormControlLabel value="id" control={<Radio />} label="Id" />
            <FormControlLabel value="text" control={<Radio />} label="Texto" />
            <FormControlLabel value="date" control={<Radio />} label="Fecha" />
        </RadioGroup>
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Buscador;
