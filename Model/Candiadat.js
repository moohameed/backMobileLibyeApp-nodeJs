const mongoose = require ('mongoose')

const candidatSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    cv:{
        type: String,
        required:true
    },
    program:{
        type: String,
        required:true
    },
    count_like:{
        type:Number,
    },
    count_unlike:{
        type:Number,
    }

})

module.exports = mongoose.model('candidat',candidatSchema)