const User = require('./User')
const Scooter = require('./Scooter');
const { userInfo } = require('os');

class ScooterApp {
  // ScooterApp code here

  //static
  static stations= {
    Manhattan: ["MAH1","MAH2","MAH3"],
    Brooklyn: ["BRO1","BRO2","BRO3"],
    Queens: ["QUE1","QUE2","QUE3"],
    Bronx: ["ONX1","ONX2","ONX3"],
    SatatenIsland: ["SIS1","SIS2","SIS3"]
  }

  static registeredUsers={};

  static scooterSessions=[];
  // static

  //instance
  constructor () {
    
  }
  //instance

  static register(user)
  {
    console.log("I will register "+user.username)
    this.registeredUsers["imran.bashir@multiverse.io"] = {status: "registered", password: "p@ss31rd"};
    this.registeredUsers["rayaan.bashir@multiverse.io"] = "registered";
    console.log(this.registeredUsers["imran.bashir@multiverse.io"].password)
  }

}

const TheNewUser = new User("imran.bashir@multiverse.io","password1",37)

console.log(ScooterApp.stations.Brooklyn);
ScooterApp.register(TheNewUser);

module.exports = ScooterApp
