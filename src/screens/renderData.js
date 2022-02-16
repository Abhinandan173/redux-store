import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData } from "../Redux/action";
import styled, {keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import { useNavigate } from "react-router-dom";
import { ButtonBase, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`}`

const RenderData = () => {
    const getData = useSelector((state)=> state.reducers)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()

    useEffect(()=>{
        console.log('getdata---', getData);
    })
    return(
        <div className={classes.root}>
            <div className="render-center-div">
            <Bounce className="header">
                <h1 className="render-headaer">renderData Component</h1>
                <button onClick={()=> navigate('/materialui')}>Click</button>
            </Bounce>
            
            {getData?.map((item,index)=>{
                return(
                   <Paper className={classes.paper}>
                       <Grid container item spacing={2}>

                          <Grid item container xs={4} md={4} sm={4} lg={4}>
                            <Grid item className={classes.image}>
                            <motion.div
                            transition={{ delay: 0.3, duration: 3 }}
                            variants={{
                                show: { opacity: 1, x: "0" },
                                hidden: { opacity: 0, x: "70%" },
                            }}
                            initial="hidden"
                            animate="show"
                            >
                            <img className={classes.img} alt="complex" 
                            src="https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png" />
                            </motion.div>
                            </Grid>
                          </Grid>

                          <Grid container item xs={8} md={8} sm={8} lg={8} >
                            <Grid item direction="column">
                                <Typography>{item.fname}</Typography>
                                <Typography>{item.lname}</Typography>
                                <Typography>{item.age}</Typography>
                                <Typography noWrap>{item.village}</Typography>
                            </Grid>

                            <Grid container item justifyContent='space-between'>
                                <Typography>Two</Typography> 
                                <Typography>Two</Typography> 
                            </Grid>
                          </Grid>

                       </Grid>
                   </Paper>
                )
            })}
            </div>
        </div>
    )
}

export default RenderData;

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
    },
    paper : {
        maxWidth:500,
        margin:'auto',
        marginTop:theme.spacing(2)
    },
    image:{
        height:80,
        width:80,
    },
    img:{
        height:'100%',
        width:'100%',
        display:'block',
        margin:'auto',
    }
}))