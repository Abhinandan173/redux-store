import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const AnimationScreen = () => {
    const classes = useStyles()
    return(
        <Grid className={classes.root}  item xs={12} sm={12} md={12} lg={12} xl={12} spacing={3}  container>
      <Grid item item xs={12} sm={12} md={6} lg={4} xl={4}  container>
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>

<Grid item xs={12} sm={12} md={6} lg={4} xl={4}  container >
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>


    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}  container >
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://v4.mui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    )
}

export default AnimationScreen;

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:'90%',
        margin:'auto'
    },
    paper:{
        maxWidth:'70%',
        margin:'auto',
        padding: theme.spacing(2),
    },
    headingText:{
        textAlign:'center'
    },
    one:{
        width:200,
        border:'2px solid red',
        borderRadius:'50%',
        height:200
    },
    two:{
        width:200,
        border:'2px solid red',
        borderRadius:'50%',
        height:200
    },
    three:{
        width:200,
        border:'2px solid red',
        borderRadius:'50%',
        height:200
    } 
}))