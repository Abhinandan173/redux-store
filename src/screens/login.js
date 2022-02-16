import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {

    let navigate = useNavigate()
    
    const openAddDataPage = () => {
        navigate('/AddData')
    }

    return(
        <div className="add-data">
            <div className="center-div">
                
                <motion.div
                    transition={{ delay: 0.3, duration: 1 }}
                    variants={{
                        show: { opacity: 1, y: "0" },
                        hidden: { opacity: 0, y: "-70%" },
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <img 
                    className="profile-pic"
                    src='https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-128.png' 
                    />
                </motion.div>
                <h2 className="header-text">user login</h2>
                <div>
                <motion.div
                    transition={{ delay: 0.3, duration: 1 }}
                    variants={{
                        show: { opacity: 1, x: "0" },
                        hidden: { opacity: 0, x: "-70%" },
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <div>
                        <input className="input-feild" placeholder="User name" required/>
                    </div>
                    </motion.div>
                    <motion.div
                    transition={{ delay: 0.3, duration: 1 }}
                    variants={{
                        show: { opacity: 1, x: "0" },
                        hidden: { opacity: 0, x: "70%" },
                    }}
                    initial="hidden"
                    animate="show"
                   > 
                    <div>
                        <input className="input-feild" placeholder="Password"/>
                    </div>
                    </motion.div>
                    <motion.div
                    transition={{ delay: 0.3, duration: 1 }}
                    variants={{
                        show: { opacity: 1, y: "0" },
                        hidden: { opacity: 0, y: "70%" },
                    }}
                    initial="hidden"
                    animate="show"
                   > 
                    <div>
                        <button className="button" onClick={openAddDataPage}>LogIn</button>
                    </div>
                    </motion.div>
                </div>
                <div className="forgot-pass">
                    <h4>Forget Passworddd ?</h4>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;