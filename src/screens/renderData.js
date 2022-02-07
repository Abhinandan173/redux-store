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
        <div>
            <h1>renderData Component</h1>
            {getData?.map((item,index)=>{
                return(
                    <div 
                        onClick={()=>dispatch(DeleteData(index)) }
                        style={{height:'30px', width:'60%', backgroundColor:'red', margin:10}}>
                        {/* // */}
                    </div>
                )
            })}
        </div>
    )
}

export default RenderData;