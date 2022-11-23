const User = require('../src/User')

describe('The user class',() => {

    const user1 = new User("imran.bashir@multiverse.io","password1",37)
    const user2 = new User("rayaan.bashir@multivers.io","password2",5)

    test('has a username', () => {
        expect(user1.username).toBe('imran.bashir@multiverse.io')
    })

    test('has a password', () => {
        expect(user1.password).toBe('password1')

    })

    test('has a age', () => {
        expect(user1.age).toBe(37)

    })
})
