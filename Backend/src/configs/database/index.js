require('dotenv').config()

module.exports = {
    uri: process.env.DB_URI,
    configOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    schema_Configs: {
        notes_Id: {
            type: String,
            unique: true
        },
        notes_Title: String,
        notes_Content: String,
        notes_CreatedAt: String,
        notes_UpdatedAt: String,
        timestamp: {
            type: String,
            default: Date.now()
        }
    }
}