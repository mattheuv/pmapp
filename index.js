import  express  from "express";
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from "body-parser";
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import * as auth from "./services/auth.service.js"
import morgan from "morgan";
import { router } from "./routes/router.js"
import cors from 'cors'
import { createServer } from "http"
import { Server } from "socket.io";

const app = express()


// Reading body inputs for post
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//alerts for apis
app.use(morgan('dev'))

app.use(cors());
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static("public"));

// session
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true }
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 600000
    },
    rolling: true
}))

app.use(bodyParser.json())
// passport

auth
app.use(passport.initialize())
app.use(passport.session())

// Including 1st Layer => Router

app.use((req, res, next) => {
    app.locals.user = req.user
    next()
})

app.use(router)
// Launch server


// Socket

// import { saveMessage, readMessage } from "./service/message.service.js";

// const msgs = await readMessage()

const httpServer = createServer(app)
const io = new Server(httpServer, {

})

// io.on("connection", function (socket) {
//     console.log("Alguien se ha conectado con Sockets");
   
//     socket.emit("mensajes", msgs);

//     socket.on("new-mensaje", function(data){
//       saveMessage(data);
//       msgs.push(data)
//         io.sockets.emit("mensajes", msgs);
        
//     });
//   });

httpServer.listen(process.env.SERVER_PORT, function(){
    console.log(`You're running socket server on http://localhost:${process.env.SERVER_PORT}`)
})
