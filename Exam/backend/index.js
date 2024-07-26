const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const mongourl = "mongodb+srv://mysql:MySQL123@cluster0.uvdfkd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongourl,{});

mongoose.connection.on('connected',()=>{
    console.log('MongoDB is connected successfully');
})
const port =3000;

app.listen(port,()=>{
    console.log(`my server is running on ${port}`);
})