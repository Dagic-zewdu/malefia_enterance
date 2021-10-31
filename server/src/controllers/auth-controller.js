const jwt = require('jsonwebtoken')
const { jwtPrivateKey } = require('../../config')
const { sendError, removeItem } = require('../utils/utils')
const { User: Account } = require('../Db/model/account-model')
const _ = require('lodash')
const generateToken = id => {
    try {
        let token = jwt.sign({ id }, jwtPrivateKey)
        return { token, sign: true }
    }
    catch (err) {
        return { token: '', sign: false }
    }
}
const checkUserSession = async (req, res) => {
    try {
        const { token, id } = req.query
        const user = await Account.findOne({ _id: id })
        if (!token) return sendError('Invalid token!', res);
        if (!user) return sendError('Invalid user id!', res);
        const verify = jwt.verify(token, jwtPrivateKey)
        if (verify)
            return res.send({ token, user: _.pick(user, ['_id', 'email', 'createdAt']) })
        else
            return sendError('Invalid user token', res)
    }
    catch (err) {
        console.log(err)
        sendError("internal server", res)
    }
}
module.exports = { generateToken, checkUserSession }