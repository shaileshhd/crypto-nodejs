import crypto from "node:crypto"

const {createCipheriv, randomBytes, createDecipheriv} = crypto

let message = "hi there"
const key = "12345678123456781234567812345678"
const iv = randomBytes(16)

// encrypt
const cipher = createCipheriv('aes256', key, iv)
const encryptedMessage = cipher.update(message, 'utf-8', 'hex')
                        + cipher.final("hex")
console.log(encryptedMessage)

// decrypt
const decipher = createDecipheriv('aes256', key, iv)
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
                        + decipher.final("utf-8")

console.log(decryptedMessage)


