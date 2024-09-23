import express from 'express'

import cors from 'cors'
const app = express();

app.use(cors({
    origin:process.env.CROSS_ORIGIN,
    credentials:true
    // Allows cookies and other credentials to be sent with cross-origin requests, which is essential for authenticated interactions between your frontend and backend.
}));

app.use(express.urlencoded({
    limit:'16kb',
    extended:true
}))
app.use(express.static("public"))
app.use(express.json({limit:"16kb"}));



export {app}