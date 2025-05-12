import mongoose from 'mongoose';

const connectDb = async()=> {
    try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGO_URI}/videoTube`)
      console.log('MongoDB connected successfully',connectionInstance.connection.host);
    } catch (error) {
        console.log('Error connecting to MongoDB :', error);
        process.exit(1); // Exit the process with failure
        
    }
}

export default connectDb;