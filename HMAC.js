import crypto from "crypto"

const {createHmac} = crypto

const secretKey1 = "123456789"
const secretKey2 = "987654321"

let message = "this is a message"

const hmac1 = createHmac("sha256", secretKey1).update(message).digest('hex')
console.log(hmac1)

const hmac2 = createHmac("sha256", secretKey2).update(message).digest('hex')
console.log(hmac2)
