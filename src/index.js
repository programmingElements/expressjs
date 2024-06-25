// import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";

// dotenv.config({
//     path: "./.env"
// })

const PORT = 8001

app.get("/", (req, res) => {
    return res.json({message: "Health Checked!"})
})


connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log("Mongodb connection error " , err)
})