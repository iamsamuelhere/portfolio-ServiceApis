require('dotenv').config()
const cors = require("cors")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const mailRoutes = require("./routes/mailRoutes");
const {getFirebaseConfig} = require("./controllers/firebaseConfig");

app.use(cors())
app.use(express.json())

app.get("/test-deploy",(req,res)=>{res.send("Tested")});
app.get("/firebase-config",getFirebaseConfig);
app.use("/sendmail", mailRoutes)

app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`)
})
