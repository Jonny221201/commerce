const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin User',
        email: 'abdulaziz221201@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jonny',
        email: 'jonny@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Dany',
        email: 'dany@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

module.exports = users