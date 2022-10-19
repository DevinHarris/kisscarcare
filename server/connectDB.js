import mongoose from 'mongoose';

const connectDB =  async () => {
    try {
        const conn = await mongoose.connect(process.env.mongoDBURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('Successfully connected to Kiss Car Care database!');

    } catch(err) {
        console.log(`Could not connect to database. Exiting with error: ${err}`);
        process.exit(1);
    }
}

export default connectDB;