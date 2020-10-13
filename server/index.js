const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const router = require('./routes/router');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use('/', router);
//  any routes going to '/<anything>' are 
//  handled by router.js



app.listen(3000)
