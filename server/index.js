
//  npm i express body-parset cors  TO DOWNLOAD

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const router = require('./routes/router');


app.use(bodyParser.urlencoded({extended: false}));  // We treat all data as strings
app.use(bodyParser.json());
app.use(cors());    // Allows communication between two local hosts- React Front &  XXX back


app.use('/', router);   // Any requests going to / are handled by router
                        //  any routes going to '/<anything>' are 
                        //  handled by router.js



app.listen(3000)
