/*1. Create nodeJS server on localhost.
    Create route and request with 4 parameters:
    email, name, surname, age. If age > 18 save email, name and surname in database(you can use any DB). Save in DB, otherwise send error.

2. Send request with email. Return list of full names.

3. Eextra(not necessary). Upload your server on heroku.*/

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/speroteck');

const {validateUser} = require('./middlewares/users.middlewares');
const {addNewUser, getUserByEmail} = require('./controllers/user.controller');

app.post('/user', validateUser, addNewUser);
app.get('/user/:email', getUserByEmail);
app.use(_mainErrorHandler);

app.listen(3000, () => {
    console.log('listening... 3000')
})


function _mainErrorHandler(err, req, res, next) {

    res.status(err.status || 500)
        .json({message: err.message} || 'Unknown error');
}
