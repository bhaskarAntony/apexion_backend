const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();
app.use(express.json());
app.use(cors());

//middlewares
app.use('/api', require('./routes/contact'));



app.listen(PORT, ()=>{
    console.log('app running at http://localhost:5000');
})