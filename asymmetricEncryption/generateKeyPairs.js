import crypto from "crypto"
import fs from "fs"
import path from "node:path"
import url from "url"

// const ENVIRONMENT = "frontend"
const ENVIRONMENT = "backend"


const {generateKeyPairSync} = crypto
const {dirname} = path
const {fileURLToPath} = url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    },
})


if(privateKey && publicKey) {
    fs.mkdirSync(path.join(__dirname, 'keypairs', ENVIRONMENT), {recursive: true})
    fs.writeFileSync(path.join(__dirname, 'keypairs', ENVIRONMENT, `privateKey.pem`), privateKey)
    fs.writeFileSync(path.join(__dirname, 'keypairs', ENVIRONMENT, `publicKey.pem`), publicKey)
    console.log("----------keys saved in asymmetricEncryption/keypairs folder----------")
}
