module.exports = {
    jwtPrivateKey: process.env.JWT_SECRET || 'dsfsdfkasdjfkasdhfkashdflashfdfsdafVdfgrt35324nm',
    // dburl:process.env.DATABASE_URL||'mongodb+srv://root:25524825233@cluster0.mlhns.mongodb.net/malefia?retryWrites=true&w=majority',
    dburl: process.env.DATABASE_URL || 'mongodb://localhost:27017/malefia',
    // mgdb: 'mongodb+srv://Dagic_zewdu:Oehqa5SYa2umwuCV@mycluster-edpny.mongodb.net/motc?retryWrites=true&w=majority',
    port: process.env.PORT || 5000
}