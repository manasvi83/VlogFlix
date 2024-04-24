import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
})) //middlewares ko use krne ke liye we always use app.use

app.use(expree.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//cookie parser is used to access cookies from browser in my own server & perform crud operations on cookies
//because there are some ways to keep secure cookies on browser which only server can read or change

export { app }