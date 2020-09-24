module.exports = {
    uri: 'mongodb+srv://icaro:passwd322@notescluster.hgi8b.mongodb.net/<dbname>?retryWrites=true&w=majority',
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