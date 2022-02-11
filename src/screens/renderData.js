import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData } from "../action";
import styled, {keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import { useNavigate } from "react-router-dom";
const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`}`

const RenderData = () => {
    const getData = useSelector((state)=> state.reducers)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('getdata---', getData);
    })
    return(
        <div className="render-container">
            <div className="render-center-div">
            <Bounce className="header">
                <h1 className="render-headaer">renderData Component</h1>
                <button onClick={()=> navigate('/materialui')}>Click</button>
            </Bounce>
            
            {getData?.map((item,index)=>{
                return(
                    <div 
                        key={index}
                        onClick={()=>dispatch(DeleteData(index)) }
                        className="render-data">
                            <h4 className="render-name">
                                <span>Name : </span>
                                {item.fname}  {item.lname}
                            </h4>
                            <div className="age-village">
                                <div>
                                    <span>Age : </span>
                                    {item.age}
                                </div>
                                <div>
                                    <span>Village : </span>
                                    {item.village}
                                </div>
                            </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default RenderData;