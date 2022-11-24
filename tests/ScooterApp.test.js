const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
const TheNewUser1 = new User("imran.bashir@multiverse.io","password1",54)
const TheNewUser2 = new User("rayaan.bashir@multiverse.io","password1",37)

const scooterApp = new ScooterApp()
// register user
scooterApp.register(TheNewUser1);
scooterApp.register(TheNewUser2);

console.log(ScooterApp,'\n');
// log in

// add scooter

// remove scooter
