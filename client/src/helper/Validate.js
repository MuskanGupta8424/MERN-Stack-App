import toast from "react-hot-toast";

//validate login page usrname
export async function usernameValidate(values){
    const error=usernameVerify({},values);
    return error;
}
export async function passwordValidate(values){
    const error=passwordVerify({},values);
    return error;
}
export async function resetpasswordValidate(values){
    const error=passwordVerify({},values);

    if(values.password !== values.confirm_password){
        error.exist = toast.error("Password not match...!");
    }
    return error;
}
export async function recoverValidate(values){
    const error=passwordVerify({},values);
    return error;
}

// validate password
function passwordVerify(error = {},values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password = toast.error("Password Required ...!");
    }else if(values.password.includes(" ")){
        error.password = toast.error("Invalid password...!");
    }else if(values.password.length < 4){
        error.password = toast.error("Password must be more than 4 characters long.");
    }else if(!specialChars.test(values.password)){
        error.password=toast.error("Password must have special characters.");
    }
    return error;
    }


// validate username
function usernameVerify(error = {},values){
if(!values.username){
    error.username = toast.error("Username Required ...!");
}else if(values.username.includes(" ")){
    error.username = toast.error("Invalid Username...!");
}
return error;
}