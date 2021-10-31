const { sendError, removeItem } = require("../utils/utils")
const { User: Account, validateUser } = require('../Db/model/account-model')
const bcrypt = require('bcrypt')
const { generateToken } = require("./auth-controller")
const _ = require('lodash')

const Login = async (req, res) => {
    try {
        const user = await Account.findOne({ email: req.body.email })
        if (!user)
            return sendError("user is not registered please singup", res)

        const compare = await bcrypt.compare(req.body.password, user.password)
        if (compare) {
            let Token = generateToken(user._id)
            Token.sign ?
                res.send({ token: Token.token, user: _.pick(user, ['_id', 'email', 'createdAt']) }) :
                sendError("unable to generate token of the user", res, 500)
        }
        else {
            sendError("Invalid password", res)
        }
    }
    catch (err) {
        console.log(err)
        sendError("Internal server error", res, 500)
    }
}

module.exports = Login