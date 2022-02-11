import React from "react";
import { ButtonBase, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const MaterialUi = () => {

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>

        <Grid item container spacing={2}>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}  container>
            <Grid className={classes.image}>
              <img className={classes.img} alt="complex" 
              src="https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png" />
            </Grid>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}  sm container >

            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>

        </Grid>

      </Paper>
    )
}

export default MaterialUi;

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
  }));



