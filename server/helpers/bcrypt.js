const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10)

module.exports = {
    hashPassword(password) {
        return bcrypt.hashSync(password, salt)
    },
    compare(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
};