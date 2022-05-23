import React from "react";
import {Button, styled} from "@mui/material";


const DomainButton = styled(Button)(({ theme }) => ({
    padding: '20px 40px',
    borderRadius: '50px',
    border: '2px solid',
    borderColor: 'var(--color)',
    backgroundColor: 'var(--color)',
    fontColor:'white'
  }));

const Domain = (props)=>{
    const {name, color} = props;
    return(
        <DomainButton style={{'--color':color}}>name</DomainButton>
    )
}

export default Domain;