import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Administration from '../Admin/Administration'
import AdministrationBody from '../Admin/AdministrationBody'
import BreakpointUp from '../Admin/BreakpointUp'
const Home =()=>{
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const classes = useStyles();
return(
    
    <>
    <Container>
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Administration />
        </Grid>
        <Grid item xs={12}>
          <AdministrationBody />
        </Grid>
        <Grid item xs={12}>
          <AdministrationBody />
        </Grid>
        <Grid item xs={12}>
          <AdministrationBody />
        </Grid>
      </Grid>
      <BreakpointUp/>
      </Container>
     
    </>
)
}
export default Home