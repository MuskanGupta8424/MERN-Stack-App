import React from "react";
import {Link} from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../Styles/Username.module.css";
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {resetpasswordValidate } from "../helper/Validate";

export default function Reset() {
const formik = useFormik({
    initialValues:{
        password:'admin@123',
        confirm_password:'admin@123'
    },
    validate:resetpasswordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
        console.log(values);
    }
})


    return (
        <>
            <div className="container mx-auto">
                <Toaster position="top-center" reverseOrder={false}></Toaster>
                <div className=" flex justify-center items-center h-screen">
                    <div className={styles.glass} style={{width:"50%"}}>
                        <div className="title flex flex-col items-center">
                            <h4 className="text-3xl font-bold">Reset</h4>
                            <span className="py-4 text-xl w-2/3 text-center text-grey-2">
                                Enter New Password.
                            </span>
                        </div>
                        <form className="py-1" onSubmit={formik.handleSubmit}>
                        
                        <div className="textbox flex flex-col items-center gap-6">
                        <input {...formik.getFieldProps('password')} type="text" className={styles.textbox} placeholder="New Password"/>
                        <input {...formik.getFieldProps('confirm_password')} type="text" className={styles.textbox} placeholder="Confirm Password"/>
                <button type="submit" className={styles.btn}>Reset</button>
                        </div>
                      
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
