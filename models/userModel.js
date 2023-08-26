const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // documents
    role:{
        type:String,
        required:[true,'role is required'],
        enum:['admin','organisation','donar','hospital']
    },
    name:{
        type:String,
        required: function() {
            if(this.role==='donar' || this.role === 'admin') {
                return true
            }
            return false
        }
    },
    organisation:{
        type:String,
        required: function() {
            if(this.role === 'organisation') {
                return true
            }
            return false
        }
    },
    hospitalName:{
        type:String,
        required: function() {
            if(this.role === 'hospital') {
                return true;
            }
            return false;
        }
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'address is required'],
    },
    phone:{
        type:String,
        required:[true,'phone number is required'],
    },
},{timestamps:true});

module.exports = mongoose.model('users',userSchema); // name of collection in out database is 'users'