import React from "react";
import {Link} from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../Styles/Username.module.css";
import {Toaster} from "react-hot-toast";

export default function Recovery() {
    return (
        <>
            <div className="container mx-auto">
                <Toaster position="top-center" reverseOrder={false}></Toaster>
                <div className=" flex justify-center items-center h-screen">
                    <div className={styles.glass} style={{width:"40%"}}>
                        <div className="title flex flex-col items-center">
                            <h4 className="text-3xl font-bold">Recovery</h4>
                            <span className="py-4 text-xl w-2/3 text-center text-grey-2">
                                Enter OTP to Recover Password.
                            </span>
                        </div>
                        <form className="pt-20">
                        <div className="textbox flex flex-col items-center gap-6">
                        <div className="input text-center">
                        <span className="text-sm py-4 text-left text-gray-500">Enter 6 Digit OTP sent to your email address.</span>
                        <input type="text" className={styles.textbox} placeholder="OTP"/>
                        </div>
                <button type="submit" className={styles.btn}>Recover</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Can't Get OTP? <button className="text-red-500">Resend</button></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
