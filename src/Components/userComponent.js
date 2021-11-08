import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConverns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userservice.js"

console.log("user component yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))



let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demirog"
//console.log(customer)