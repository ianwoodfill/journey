const {app} = require('electron')
const Datastore = require('nedb-promises')

const dbFactory = (fileName) => Datastore.create({
    filename: `${process.env.NODE_ENV === 'dev' ? '.' : app.getAppPath('userData')}/data/${fileName}`, 
    timestampData: true,
    autoload: true
})

const db = {
    preferences: dbFactory('preferences.db'),
    entries: dbFactory('entries.db')
}
  
module.exports = db