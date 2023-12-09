const accountId  = 13334
let accountEmail = "pyakurel.risav@gmail.com"
var accountPassword = "3456"
accountCity = "Kathmandu" // not a good way to declare variable

let accountState; // JS accepts it as undefined as we haven't given  value of variable after declaration

// accountId = 3 : we can't change constant

accountEmail= "risav.pyakurel@hotmail.com"
accountPassword = "678900"
accountCity = "Pokhara"
console.log(accountId);

/*
preferred not to use var 
because of issue in block scope and function scope

*/
console.table([ accountEmail, accountId, accountPassword, accountCity , accountState])