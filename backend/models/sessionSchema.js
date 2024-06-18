const mongoose = require('mongoose');
const Session = mongoose.model('sessions', new mongoose.Schema({}));
module.exports = Session;
