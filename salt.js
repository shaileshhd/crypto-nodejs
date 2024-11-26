import crypto from "node:crypto"

let {scryptSync, randomBytes, timingSafeEqual} = crypto

// encrypt
const password = "shailesh123"
const salt = randomBytes(16).toString('hex')
const hash = scryptSync(password, salt, 64).toString('hex')   
const hashedPassword = `${salt}:${hash}`
console.log("signup:", hashedPassword)

// validate
const inputPassword = "shailesh123"
const [saltKey, hashed] = hashedPassword.split(":")
const inputHashBuffer = scryptSync(inputPassword, saltKey, 64)

const signupHashedBuffer = Buffer.from(hashed, "hex")

const match = timingSafeEqual(signupHashedBuffer, inputHashBuffer)


console.log(`login: ${salt}:${inputHashBuffer.toString('hex')}`)

console.log("result", match)
