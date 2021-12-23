const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require ('mongoose')
var bodyParser = require('body-parser')
const candidatRouter = require('./Routes/candidat')
// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
/*app.use('/services',serviceRouter)*/
app.use('/api/candidat', candidatRouter);

app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb+srv://election_libye:election123@cluster0.p2cdo.mongodb.net/electionLibye?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true },
err=> {
    if (!err)
    console.log('connection succeed')
    else 
    console.log('connection failed :' , JSON.stringify(err, undefined,2))
}
)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));