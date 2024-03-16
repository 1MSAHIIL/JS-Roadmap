const accountId = 14555  
let accountEmail = "sahil@google.com"
var accountPassword = "12345"
accountCity = "Indore"

// accountId = 56  const is permanent variables type
/* prefer let and const and avoid var bcz it has block and functional scope issue */

accountEmail = "khan@g.com"
accountPassword="6595"
accountCity="rajpur"

let accountState;

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])