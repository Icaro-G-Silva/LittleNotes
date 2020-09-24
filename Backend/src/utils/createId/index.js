const crypto = require('crypto')

async function newId(db) {
    var exist = true
    do {
        var id = crypto.randomBytes(12).toString('hex').slice(0, 12)
        const isRegistered = await db.read({notes_Id: id})
        if(isRegistered.length <= 0) exist = false
    } while(exist)
    return id
}

module.exports = newId
