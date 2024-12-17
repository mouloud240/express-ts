import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port=process.env.PORT || 3000;
const app=express();
app.listen(port,()=>{
console.log('Server is running on port '+port);
})

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello World');
});

