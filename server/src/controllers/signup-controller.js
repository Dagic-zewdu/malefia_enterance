const { sendError } = require("../utils/utils")
const { generateToken } = require("./auth-controller")
const { User: Account, validateUser } = require('../Db/model/account-model')
const bcrypt = require('bcrypt')
const _ = require('lodash')

const signup = async (req, res) => {
    try {
        const { email, password: pass } = req.body
        const User = await Account.findOne({ email })
        if (User)
            return sendError('user has been registered before please signin', res)
        const { error } = validateUser({ email, password: pass });
        if (error) return sendError(error.details[0].message, res);
        const salt = await bcrypt.genSalt(10);
        let Pass = await bcrypt.hash(pass, salt);
        const user = new Account({ email, password: Pass })
        const save = await user.save()
        const { token, sign } = generateToken(save._id)
        sign ? res.send({ token,user: _.pick(user, ['_id', 'email', 'createdAt']) }) :
            sendError("unable to generate token of the user", res, 500)
    }
    catch (err) {
        console.log(err)
        sendError("internal server error", res, 500)
    }
}
module.exports = signup