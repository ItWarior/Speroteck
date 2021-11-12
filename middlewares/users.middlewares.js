const {userValidator} = require('../validators/user.validator');
const ErrorHandler = require('../Errors/errorHandler');

module.exports = {
    validateUser: (req, res, next) => {
        try {
            const user = req.body;
            const {error, value} = userValidator.validate(user);

            if (error){
                throw new ErrorHandler(400, error.details[0].message);
            }

            req.body = value;

            next()
        }catch (e) {
            next(e)
        }
    }
}
