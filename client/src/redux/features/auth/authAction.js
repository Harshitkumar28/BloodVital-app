import {createAsyncThunk} from '@reduxjs/toolkit';
import API from "../../../services/API";
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({role,email,password},{rejectWithValue}) => {
        try {
            const {data} = await API.post('/auth/login',{role,email,password})
            // store token
            if(data.success) {
                localStorage.setItem('token',data.token)
                // toast.success(data.message)
                alert(data.message);
                window.location.replace('/')
            }
            return data;

        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else return rejectWithValue(error.message)
        }
    }
);

// register
export const userRegister = createAsyncThunk(
    'auth/register',
    async ({name,role,email,password,organisation,address,phone,hospitalName,website},{rejectWithValue}) => {
        try {
            const {data} = await API.post('/auth/register',{name,role,email,password,organisation,address,phone,hospitalName,website})

            if(data?.success) {
                alert("User Registered Successfully")
                // toast.success(data.message)
                window.location.replace('/login')
            }
            // console.log(`ex is ${data.existingUser} and S ${data.user}`)
            
        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else return rejectWithValue(error.message)
        }
    }
);

// current user
export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async ({rejectWithValue}) => {
        try{
            const res = await API.get('/auth/current-user');
            if(res?.data) {
                return res?.data;
            }

        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            else return rejectWithValue(error.message)
        }
    }
)