try {
    const serverConfigs = require('./configs/server')
    const Express = require('express')
    const App = Express()
    const cors = require('cors')
    const routes = require('./routes')

    App.use(cors())
    App.use(Express.urlencoded({ extended: false }))
    App.use(Express.json())
    App.use(routes)
    
    App.listen(serverConfigs.port, serverConfigs.host, ()=>{
        console.log(`Server running on http://${serverConfigs.host}:${serverConfigs.port}/`)
    })

} catch(error) {
    console.error(`General error catched -> ${error}`)
}
