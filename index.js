import express from 'express'
import cors from 'cors'
const app = express()

app.get("/", (req, res)=>{
    res.send("hello")
})
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors());
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static("public"));


app.listen(8080, ()=>{
    console.log("running server")
})