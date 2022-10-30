require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const mailRoutes = require("./routes/mailRoutes");

app.use(express.json())
app.use("/sendmail",mailRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at: ${PORT}`)
})