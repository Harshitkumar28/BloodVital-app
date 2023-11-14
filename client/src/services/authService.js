import { userLogin, userRegister } from '../redux/features/auth/authAction';
import store from '../redux/store'

export const handleLogin = (e,email,password,role) => {
    e.preventDefault()
    try{
        if(!role || !email || !password) {
            return alert("Please provide all fields")
        }
        store.dispatch(userLogin({email,password,role}));
    } catch(error) {
        console.log(error)
    }
};

export const handleRegister = (e,name,role,email,password,organisation,address,phone,hospitalName,website) => {
    e.preventDefault()
    try{
        store.dispatch(userRegister({name,role,email,password,organisation,address,phone,hospitalName,website}))
    } catch(error) {
        console.log(error)
    }
};