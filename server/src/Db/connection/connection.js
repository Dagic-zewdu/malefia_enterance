const Mongoose = require('mongoose');
const connect = (databaseUrl) => {
    return Mongoose
        .connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Database connected'))
        .catch(err => console.error('Database connection failed', err));
};
module.exports = connect