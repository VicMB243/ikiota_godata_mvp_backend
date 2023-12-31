const mysqlConnection = require('./db');
const Express = require('express');
const cors = require('cors');


const adminsRouter = require("./routes/admins")
const usersRouter  = require("./routes/users")
const companiesRouter  = require("./routes/companies")
const productsRouter  = require("./routes/products")
const banksRouter  = require("./routes/banks")
const applicationsRouter  = require("./routes/applications")

const multer = require('multer')



require('dotenv').config();

const app = Express();
const http = require('http').createServer(app);
const socketio = require('socket.io')(http);



    
    
    app.use(Express.json())
    app.use(cors());
   
   

app.use('/uploads', Express.static(__dirname +'/uploads'));

    app.get("/", (req, res) => {
        res.send("Hello from ikiota!We are live now!!!");
     });
 
     



    app.use('/admins', adminsRouter);
    app.use('/users', usersRouter);
    app.use('/companies', companiesRouter);
    app.use('/products', productsRouter);
    app.use('/banks', banksRouter);
    app.use('/applications', applicationsRouter);
    



    const port =  process.env.PORT || 3001;




    var users = {};
    //Socket Logic
    socketio.on("connection", (userSocket) => {

        console.log('Server started with socket io');
        // console.log(userSocket.id, 'Has joined');
        
    })




    http.listen(port)
    // app.listen(
    //     port,
    //     (_) => {
    //         console.log('Server started');
    //     });
