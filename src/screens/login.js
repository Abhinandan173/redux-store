import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    let navigate = useNavigate()
    
    const openAddDataPage = () => {
        navigate('/AddData')
    }

    return(
        <div className="add-data">
            <div className="center-div">
                <img 
                className="profile-pic"
                src='https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png' 
                />
                <h2 className="header-text">user login</h2>
                <div>
                    <div>
                        <input className="input-feild" placeholder="User name"/>
                    </div>
                    <div>
                        <input className="input-feild" placeholder="Password"/>
                    </div>
                    <div>
                        <button className="button" onClick={openAddDataPage}>LogIn</button>
                    </div>
                </div>
                <div className="forgot-pass">
                    <h4>Forget Password ?</h4>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;