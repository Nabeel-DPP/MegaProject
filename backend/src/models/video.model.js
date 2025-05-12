import  mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { Schema, model } from 'mongoose';   
const VideoSchema = new Schema({
    videoFile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views:
    {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    owner:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
    
}, {timestamps:true});

VideoSchema.plugin(mongooseAggregatePaginate);

export const Video = model('Video', VideoSchema);
