const mongoose = require('mongoose');

// Create a database => mongoose.model(Database Name,Schema)
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim:true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        reuiqred: true,
        ref: 'User'

    }
},{
    timestamps:true
})


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim:true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
//     owner:{
//         type: mongoose.Schema.Types.ObjectId,
//         reuiqred: true,
//         ref: 'User'

//     }
// });

const Task = mongoose.model('Task',taskSchema)

module.exports= Task