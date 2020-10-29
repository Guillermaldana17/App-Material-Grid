import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden'
import DeleteIcon from '@material-ui/icons/Delete';
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
        <Hidden xsDown>
        <Grid item sm={2}>
        
        <IconButton aria-label="delete" className={classes.margin} size="small" color='primary'>
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        
        </Grid>
        </Hidden>
        <Grid item sm={2}>
        <Box display={{ xs: 'block',sm:'none', md: 'none', lg:'none' }}>
          <label className={classes.labelTitle}>test</label> 
        </Box> 
        </Grid>
       
        </Grid>
      </CardContent>
    </Card>
  );
}
export default AdministrationBody