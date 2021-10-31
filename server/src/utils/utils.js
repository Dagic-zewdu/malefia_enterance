const sendError = (message, res, port) =>
    res.status(port ? port : 400)
        .json({ status: port ? port : 400, message })
const removeItem = (obj, item) => {
    let Obj = {}
    item.forEach(f => {
        for (x in obj) {
            if (x !== f) {
                console.log(x)
                Obj = { ...Obj, [x]: obj[x] }
            }
        }
    })
    return Obj
}
module.exports = { sendError, removeItem }