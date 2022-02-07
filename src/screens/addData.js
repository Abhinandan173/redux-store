import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDataInRedux } from "../action";

const AddData = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [village, setVillage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const save = () => {
        console.log('----', fname, lname, age, village);
        let obj = {
            fname:fname,
            lname:lname,
            age:age,
            village:village
        }
        dispatch(addDataInRedux(obj))
    }

    const nextpage = () => {
       navigate('/RenderData')
    }

    return(
        <div className="container">
            <div className="add-feild-card">
                <div className="feild-wraper">
                    <input className="feilds" placeholder="Enter F-Name" 
                        value={fname}
                        onChange={(e)=>setFname(e.target.value)}/>
                    <input className="feilds" placeholder="Enter L-Name"
                        value={lname}
                        onChange={(e)=>setLname(e.target.value)}/>
                </div>
                <div className="feild-wraper">
                    <input className="feilds" placeholder="Enter Age"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}/>
                    <input className="feilds" placeholder="Enter Village"
                        value={village}
                        onChange={(e)=>setVillage(e.target.value)}/>
                </div>
                <div className="button-wraper">
                    <button className="btn-save" onClick={save}>Save</button>
                </div>
            </div>
            <button onClick={nextpage}>nextpage</button>
            
        </div>
    )
}
export default AddData;