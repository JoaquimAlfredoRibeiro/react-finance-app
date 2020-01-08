const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/financesapp', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."
mongoose.Error.messages.Number.min =
    "The inserted '{VALUE}' is lower than '{MIN}'."
mongoose.Error.messages.Number.max =
    "The inserted '{VALUE}' is higher than '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' is not allowed for the atribute '{PATH}'."