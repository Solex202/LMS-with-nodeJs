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
                return(
                    this.name
                    .split(" ")
                    .map(name => name[0])
                    .join("")
                    .toUpperCase()+
                    Math.floor(10 + Math.random()* 90)+
                    Math.floor(10+ Math.random()*90)
                    
                )
            }
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        teachers:[
            {
                type: Schema.Types.ObjectId,
                ref: "Teacher"
            }
        ],
        students:[
            {
                type: Schema.Types.ObjectId,
                ref: "Student"
            }
        ],
        subjects:[
            {
                type: Schema.Types.ObjectId,
                ref: "Subject"
            }
        ]

    },
    {timeStamp: true}
    
)

const Program = mongoose.model("Program", ProgramSchema)

module.exports = Program