const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const corsOptions = {
    origin: '*', // Allow all origins, but it's better to specify specific origins for security.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  };

app.use(cors(corsOptions))

app.use(express.json());

const mongourl = "mongodb+srv://mysql:MySQL123@cluster0.uvdfkd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongourl,{});

mongoose.connection.on('connected',()=>{
    console.log('MongoDB is connected successfully');
});

const userRoutes = require('./routes/userRoute');
app.use('/api',userRoutes);

const eventRoutes = require('./routes/eventRoutes')
app.use('/api',eventRoutes);

const port =4580;

app.listen(port,()=>{
    console.log(`my server is running on ${port}`);
})