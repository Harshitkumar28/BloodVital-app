const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

// DEPLOYMENT
const path = require('path') // node gives by default support to it


// dot config
dotenv.config(/* here path exists but since it is in root file so it will detected automatically */);

// after dotenv mongodb connection
connectDB();

// rest object 
const app = express(); // means every functionality of express is stored in this app variable

// middlewares :- app.use([path], middlewareFunction);
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
// 1 test route

// made this with testRoutes and testController separately
// app.get("/", (req,res) => {
//     res.status(200).json({
//         message: 'Welcome to Blood Bank App' ,
//     });
// });

// below act as middleware
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth',require("./routes/authRoutes"));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));
app.use('/api/v1/analytics', require('./routes/analyticsRoute'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));

// DEPLOYMENT :- STATIC FOLDER its a middleware
app.use(express.static(path.join(__dirname,'./client/build')))
// STATIC ROUTE
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

// http://localhost:8080/tet


// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} Port ${process.env.PORT}`
    .bgBlue.white);
});

// we're using MVC pattern here
// models contains the schemas
// routes contains the controller and handles CRUD operations
