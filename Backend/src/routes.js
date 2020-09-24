const {Router} = require('express')
const router = Router()
const newId = require('./utils/createId')
const getActualDate = require('./utils/getDate')
const mongo = require('./database/connection')
const DBInterface = require('./database/interface')
const myDb = new DBInterface()

mongo.on('connected', () => {console.log('Alright, we are connected :D')})

router.get('/notes', async(req, res) => {
    const data = await myDb.read()
    res.status(200).json(data)
})

router.get('/note/:id', async(req, res) => {
    const {id} = req.params
    const data = await myDb.read({notes_Id: id})
    res.status(200).json(data)
})

router.put('/changeNote/:id', async(req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    const actualDate = getActualDate()
    const notesObject = {
        notes_Title: title,
        notes_Content: content,
        notes_UpdatedAt: actualDate
    }
    await myDb.update(notesObject, id)
    res.status(200).json({message: 'Data has been updated successfully'})
})

router.post('/newNote', async(req, res) => {
    const {title, content} = req.body
    const id = await newId(myDb)
    const actualDate = getActualDate()
    const notesObject = {
        notes_Id: id,
        notes_Title: title,
        notes_Content: content,
        notes_CreatedAt: actualDate,
        notes_UpdatedAt: actualDate
    }
    await myDb.write(notesObject)
    res.status(200).json({message: 'Data has been registered successfully'})
})

router.delete('/deleteNote/:id', async(req, res) => {
    const {id} = req.params
    await myDb.destroy(id)
    res.status(200).json({message: 'Data has been deleted successfully'})
})


router.get('/', (req, res)=>{
    return res.status(200).json({message: 'Server running!'})
})

module.exports = router
