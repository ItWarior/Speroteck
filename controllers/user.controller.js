const Users = require('../DBS/Users');
const ErrorHandler = require('../Errors/errorHandler');

module.exports = {
    addNewUser: async (req, res, next) => {
        try {
            const new_user = req.body;
            const user = await Users.findOne({['email']: req.body.email});


            if (user) {
                throw new ErrorHandler(409, 'There is the same user');
            }

            const created_user = await Users.create(new_user);

            res.json(created_user).status(201);

        } catch (e) {
            next(e);
        }
    },
    getUserByEmail: async (req, res, next) => {
        try {
            const foundUser = await Users.findOne(req.params);

            if (!foundUser) {
                throw  new ErrorHandler(404, 'User is not found')
            }

            res.json(foundUser).status(201);
        } catch (e) {
            next(e)
        }
    }
}
