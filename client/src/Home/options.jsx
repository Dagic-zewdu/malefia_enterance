import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minHeight:'100%'
  },
  title:{
    margin:'15% 0 2% 0' ,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btns:{

    display: 'block',
    padding:'5% 0 0 0 ',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    padding:'8% 10% 8% 10%',
    margin:'0 0 5% 0'
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent style={{display:'block'}}>
        <Typography variant="h5" component="h2" className={classes.title}>
          Select Account Type
        </Typography>
      </CardContent>
      <CardActions className={classes.btns}>
        <div>
        <Button variant="contained"  color="primary" className={classes.btn} style={{padding:'8% 13% 8% 13% '}}>  Cashier </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" className={classes.btn}> Accountant </Button>
        </div>
        <div>
          <Button variant="contained"color="primary"  className={classes.btn}>Board Member</Button>
        </div>

      </CardActions>
    </Card>
  );
}
