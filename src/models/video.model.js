import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
//it works as a plugin it is majorly used in companies learn more about it aggregate pipeline
//in this project we are using it to calculate watch duration
//we'll be using bcrpt library to hash passwords

const videoSchema = new Schema ({
    videofile : {
        type: String, //cloudinary url
        required: true
    },
    thumbnail : {
        type: String, //cloudinary url
        required: true
    },
    title : {
        type: String, 
        required: true
    },
    description : {
        type: String, 
        required: true
    },
    duration : {
        type: Number, 
        required: true
    },
    views : {
        type: Number, 
        default : 0
    },
    isPublished : {
        type: Boolean,
        default : true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginate) //we can write aggregation queries  using this plugin
//there are many methods and various middlewares in mongoose which can be used and create and add your own plugins

export const Video = mongoose.model("Video",videoSchema)