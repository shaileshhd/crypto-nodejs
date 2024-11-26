import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import url from "url"

const ENVIRONMENT = "backend"

const {publicEncrypt, privateDecrypt} = crypto
const {readFileSync} = fs

const {dirname} = path
const {fileURLToPath} = url
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let message = "hi there"
const messageBuffer = Buffer.from(message, 'utf8')

const privateKey = readFileSync(path.join(__dirname, 'keypairs', ENVIRONMENT, `privateKey.pem`), {encoding: "utf-8"})
const publicKey = readFileSync(path.join(__dirname, 'keypairs', ENVIRONMENT, `publicKey.pem`), {encoding: "utf-8"})

const encryptedMessage = publicEncrypt(publicKey, messageBuffer)

console.log(encryptedMessage.toString("hex"))

const decryptedMessage = privateDecrypt(privateKey, encryptedMessage)
console.log(decryptedMessage.toString("utf8"))