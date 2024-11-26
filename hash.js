import crypto from "node:crypto"

let {createHash} = crypto

function hash(password) {
    return createHash('sha256').update(password).digest('hex')
}

const password = "shailesh1999"
console.log(hash(password))