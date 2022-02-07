import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData } from "../action";

const RenderData = () => {
    const getData = useSelector((state)=> state.reducers)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('getdata---', getData);
    })
    return(
        <div className="render-container">
            <div className="render-center-div">
            <h1 className="render-headaer">renderData Component</h1>
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