const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProgramSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
            default: "4 years"
        },
        code:{
            type: String,
            required: true,
            default: function (){
                return
            }
        }

    }
)