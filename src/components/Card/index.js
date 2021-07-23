import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styling = {
   root: {
     minWidth: 275,
     color: "#fff",
     background: "#424242"
   },
   bullet: {
     display: 'inline-block',
     margin: '0 2px',
     transform: 'scale(0.8)',
   },
   title: {
     fontSize: 14,
     color: "rgba(255, 255, 255, 0.7)"
   },
   pos: {
     marginBottom: 12,
     color: "rgba(255, 255, 255, 0.7)"
   },
   links: {
    color: "rgba(255, 255, 255, 0.7)"
   }
 };

const useStyles = makeStyles(styling);

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          @material-ui/core
        </Typography>
        <Typography variant="h5" component="h2">
          i{bull}am{bull}a{bull}card
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          secondary text
        </Typography>
        <Typography variant="body2" component="p">
          i'm running with material-ui/core.
          <br />
          {'"and its pretty cool"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.links} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}