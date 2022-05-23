import React, {useEffect} from 'react';
import logo from './statics/logo512.png';
import './App.css';
import { Box, Container, Grid, Collapse, Paper, Typography } from '@mui/material';
import Footer from './common/Footer';
import Pages from './components/Pages';
import background from './statics/background.jpg';

const Header = (props) => {
  const [displayLogo, setDisplayLogo] = React.useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("refresh");
            setDisplayLogo(true);
          }, 1000);
    }, []);
    return(
        <Paper elevation={0} sx={{color:'white', backgroundColor:'black'}}>
          <Box style={{position:'absolute', width:'100%'}}>
            <img src={background} alt="" width="100%" height="200px"/>
          </Box>
          <Box style={{position:'relative'}}>
            <Grid container spacing={0} >
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    {displayLogo && <Collapse in={true} orientation="horizontal" >
                          <img style={{padding:'20px'}} src={logo} width="150px" height="150px" alt="" />
                      </Collapse>}
                  </Grid>
                  {!displayLogo && <Grid item/>}
                  <Grid item xs={12} sm={6} lg={9} xl={9}>
                      <div style={{marginTop:'30px'}}>
                        <Typography style={{fontFamily:'Monotype Corsiva', fontWeight:'bold', fontSize:'60px'}}>Cabinet Palladium <span style={{color:'yellow'}}>&</span> Continuum​</Typography>
                        <Typography sx={{width:'50%'}}>Agence de détectives privés formés et diplômés d’Etat.​</Typography><br/>
                      </div>
                  </Grid>
              </Grid>
          </Box>
        </Paper>
    )
}

function App() {
  return (
        <Box style={{backgroundColor:'black',color:'white', backgroundImage:`url(${background})`, backgroundSize:'cover', fontFamily:'Monotype Corsiva'}}>
          <Pages />
        </Box>
  );
}

export default App;
