import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  labelTitle:{
    fontSize: 14,
    fontWeight:300
  }
});

const AdministrationBody = ()=>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <Card className={classes.root}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <label  className={classes.labelTitle}>Aldana Guillermo </label>
        </Grid>
        <Grid item xs={2}>
          <label className={classes.labelTitle}>Office</label>
        </Grid>
        <Grid item xs={2}>
         <label className={classes.labelTitle}>32</label> 
        </Grid>
        <Grid item xs={2}>
        <label className={classes.labelTitle}> 40</label>  
        </Grid>
        <Grid item xs={2}>
        <label className={classes.labelTitle}>8</label>  
        </Grid>
        <Grid item xs={2}>
        <label className={classes.labelTitle}>Edit</label>  
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default AdministrationBody