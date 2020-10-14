

const {Router} = require('express');

//  npm i nanoid  to download
//  NANOID creates a randon string to use instead of a number, like User 1, User 2, etc

const {customAlphabet} = require('nanoid');
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

const router = Router();


//  MOCK DATASBASE  START ==>
//  NOTE: the id's in the style of 'djkioihb' are more secure than using numbers alone.
let users = {
    vtrxohtmzf: {
    name: 'Scooper',
    age: 55,
    email: 'jacob.reilly-cooper@wearecodenation.com'
    },

    ihtvnwnyyi: {
    name: 'Dean',
    age: 54,
    email: 'dean@wearecodenation.com'
    },

    wxunpnrica: {
    name: 'Pedro',
    age: 60,
    email: 'pedro@wearecodenation.com'
    }
}
//  MOCK DATASBASE  END /////


//  CREATE USER ENTRY -- Crud
router.post('/user/create', (req, res) => {
    let {name, age, email} = req.body;
    if (name == '' || age == '' || email == '') {
    res.status(422).send({error: 'Please provde all details'})
    
    } else {

        users[id] = {
            id,
            name,
            age,
            email
        }
    
        res.send({
            message: 'User was created',
            user: users[id]
        });
    
        console.log(users);
    };
});


//  GET USER ENTRY -- cRud
router.get('/user/:id', (req, res) => {
    if (users[req.params.id]) {
            res.status(200).send(users[req.params.id]);
            // return;   // The Return exits the function and means we don't need the else bit below
        } else {
            res.status(404).send({error: 'No user with that ID'});
        }
        console.log(users);
});


//  UPDATE USER ENTRY -- crUd
router.put('/user/:id', (req, res) => {
    let {name, age, email} = req.body;
    let user = users[req.params.id]
    console.log(email);

    if (user) {
        user.name = name || user.name;
        user.age =  age || user.age;
        user.email = email || user.email;
        res.status(200).send({message: 'User updated'});
    }
        console.log(users);
});


// DELETE USER ENTRY -- cruD
router.delete('/user/:id', (req, res) => {
    if (users[req.params.id]) {
        delete users[req.params.id];
        res.status(201).send({error: 'User was deleted'});
    } else {
        res.status(404).send({error: 'No user with that ID'});
    }
        console.log(users);
});


// CRUD operations:

// CREATE - post
// READ   - get  
// UPDATE - put
// DELETE - delete

module.exports = router;
