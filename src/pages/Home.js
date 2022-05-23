import { Box, Collapse, Fade, Grid, Grow, Paper, Slide, Typography, Zoom } from "@mui/material";
import React, { useEffect } from "react";
import Domain from "../common/Domain";
import logo from '../statics/logo512.png';
import spaceBlack from '../statics/black-space.png';
import wave from '../statics/wave.png';
import openSpace from '../statics/open-space.png';
import whiteMan from '../statics/white-man.png';
import goldHand from '../statics/gold-hand.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Link } from "react-router-dom";
import { WhatsappSharp } from "@mui/icons-material";

const Presentation = (props) => {
    const [workingHours, setWorkingHours] = React.useState(false);
    const [presentation, setPresentation] = React.useState(false);
    const [status, setStatus] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setWorkingHours(true);
          }, 2000);
        setTimeout(() => {
            setPresentation(true);
          }, 6000);
          setTimeout(() => {
            setStatus(true);
          }, 7000);
    }, []);

    return(
        <Grid container spacing={3} style={{color:'white'}}>
            <Grid item xs={12} sm={6} lg={6} xl={6} style={{marginTop:'60px'}}>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <Typography style={{fontSize:'30px', fontWeight:'bold', display:(workingHours ? '' : 'none')}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portable : <span style={{color:'yellow'}}>06 51 91 89 27​</span><br/>
                        (6j/7: 06h-23h du lundi au samedi)
                    </Typography>
                </Slide>
                <Zoom in={presentation} timeout={500}>
                    <Typography>
                        Directrice d’Agence diplômée de l’ESARP.
                        Agence agréée par le CNAPS 
                        (Conseil National des Activités Privées de Sécurité)
                        Le CNAPS est une administration publique 
                        sous la tutelle du Ministère de l’Intérieur.
                    </Typography>
                </Zoom>
                <Zoom in={status} timeout={500}>
                    <Box style={{marginTop:'20px', border:'3px groove'}}>
                        <Typography style={{padding:'10px'}}>
                            SIRET :498 004 779 00043.<br/>
                            NUMEROD4AUTORISATION : AUT-060-2121-04-15-20220819389.<br/>
                            NUMERO D'AGREMENT : AGD-060-2026-12-07-20210739590.
                        </Typography>
                    </Box>
                </Zoom>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={6} style={{zIndex:2,marginTop:'-30px'}}>
                <img src={spaceBlack} alt="space black" width="100%" height="100%" />
            </Grid>
        </Grid>
    );
}

const Header = (props) => {
    const [displayLogo, setDisplayLogo] = React.useState(false);
    const [title, setTitle] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplayLogo(true);
          }, 1000);

          setTimeout(() => {
            setTitle(true);
          }, 3000);
    }, []);
    return(
        <Paper style={{backgroundColor:'transparent', color:'white'}}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={3} lg={2} xl={2}>
                    <Collapse in={displayLogo} orientation="horizontal" >
                        <img style={{padding:'20px'}} src={logo} width="150px" height="150px" alt="" />
                    </Collapse>
                </Grid>
                <Grid item xs={12} sm={9} lg={10} xl={10}>
                    <div style={{marginTop:'30px'}}>
                        <Typography style={{fontFamily:'Monotype Corsiva', fontWeight:'bold', fontSize:'60px'}}>Cabinet Palladium <span style={{color:'yellow'}}>&</span> Continuum​</Typography>
                        <Collapse in={title} orientation="vertical">
                            <Typography style={{width:'40%', margin:'20px 0 0 20px', textAlign:'center'}}>Agence de détectives privés formés et diplômés d’Etat.​</Typography>
                        </Collapse>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}


const Contact = (props) => {
    const {name, value, link, icon } = props;
    return (
        <Box style={{display:'flex', alignItems:'center' }}>
            <Typography style={{fontWeight:'bold', fontSize:'30px', padding:'5px'}}>{name}</Typography>
            <Typography component="a" target="_blank" href={link} style={{fontWeight:'bold', textDecoration:'auto', fontSize:'30px', color:'yellow', padding:'10px'}}>{value}</Typography>
            <Typography component="a" target="_blank" href={link} >{icon}</Typography>
        </Box>
    );
}


const Contacts = (props) => {
    const [serviceVisibile, setServiceVisibile] = React.useState(false);
    const [facebookAnim, setFacebookAnim] = React.useState(false);
    const [linkedinAnim, setLinkedinAnim] = React.useState(false);
    const [whatsappAnim, setWhatsappAnim] = React.useState(false);

    useEffect(() => {
        console.log(window.pageYOffset);
        setTimeout(() => {
            setServiceVisibile(true);
          }, 10000);
          setTimeout(() => {
            setFacebookAnim(true);
          }, 11000);
          setTimeout(() => {
            setLinkedinAnim(true);
          }, 12000);
          setTimeout(() => {
            setWhatsappAnim(true);
          }, 13000);
    }, []);
    

    return(
        <Grid container spacing={0}>
             <Grid item xs={12} sm={12} lg={12} xl={12}>
                <Collapse in={facebookAnim} orientation="vertical">
                    <Contact name="Facebook" value="Cabinet palladium" link="https://www.facebook.com/palladium.continuum" icon={<FacebookIcon fontSize="large" sx={{color:'#2A5298'}}/>} />
                </Collapse>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
                <Collapse in={linkedinAnim} orientation="vertical" >
                    <Contact name="LinkedIn" value="palladium-continuum" link="https://www.linkedin.com/in/palladium-continuum-899bb0234" icon={<LinkedInIcon fontSize="large" sx={{color:'#0076AE'}}/>} />
                </Collapse>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
                <Collapse in={whatsappAnim} orientation="vertical">
                    <Contact name="WhatsApp" value="Cabinet palladium" link="tel:+33769689557" icon={<WhatsAppIcon fontSize="large" sx={{color:'#40C351'}}/>} />
                </Collapse>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
                <img src={openSpace} alt="espace coworking" width="100%" height="100%" />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
                <Zoom in={serviceVisibile} timeout={500}>
                    <Typography style={{textAlign:'center'}}>
                        Au service des Particuliers, Professionnels, Associations, Administrations publiques, et professionnels du Droit.​
                    </Typography>
                </Zoom>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
                <img src={whiteMan} alt="un homme sur bureau de travail" width="100%" height="100%" />
            </Grid>
        </Grid>
    );
}

const Home = () => {
    const [goldHandVisible, setGoldHandVisible] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setGoldHandVisible(true);
          }, 8000);

         
    }, []);

    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Header/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Presentation />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{marginTop:'-30px', zIndex:2}}>
                <Contacts />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{marginTop:'-200px'}}>
                <Grow in={goldHandVisible} timeout={500}>
                    <img src={goldHand} alt="bras d'or" width="100%" height="100%" />
                </Grow>
            </Grid>
        </Grid>
    );
}

export default Home;