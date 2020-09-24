const mongoose = require('mongoose')
const { schema_Configs } = require('../../configs/database')

class DbInterface {
    constructor() {
        this.model = this.create()
    }

    async write(content) {
        const notes = new this.model(content)
        await notes.save(err => {
            if(err) throw new Error(`Error in 'write' on 'DBInterface' -> ${err}`)
            else console.log(`Data has been successfully written into Database!`)
        })
    }

    async update(content, notes_Id) {
        await this.model.findOneAndUpdate({notes_Id}, content, (err)=>{
            if(err) throw new Error(`Error in 'update' on 'DBInterface' -> ${err}`)
            else console.log(`Data has been successfully updated into Database!`)
        })
    }

    //configs: only for special searches (Search by ID).
    async read(configs = null) {
        var content = null
        if(configs === null) {
            await this.model.find({}).then(data => {
                console.log(`Data inside the database:\n${data}`)
                content = data
            }).catch(err => {
                throw new Error(`Error in 'read' on 'DBInterface' -> ${err}`)
            })
        }
        else {
            await this.model.find(configs).then(data => {
                console.log(`Data inside the database:\n${data}`)
                content = data
            }).catch(err => {
                throw new Error(`Error in 'read' on 'DBInterface' -> ${err}`)
            })
        }
        return content
    }

    async destroy(notes_Id) {
        await this.model.deleteOne({notes_Id}, err => {
            if(err) throw new Error(`Error in 'destroy' on 'DBInterface' -> ${err}`)
            else console.log(`Data has been successfully deleted!`)
        })
    }

    create() {
        const Schema = mongoose.Schema
        const NotesSchema = new Schema(schema_Configs)
        const NotesModel = mongoose.model('notes', NotesSchema)
        return NotesModel
    }
}

module.exports = DbInterface
