const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/financesapp', { useNewUrlParser: true })

//{ useUnifiedTopology: true }