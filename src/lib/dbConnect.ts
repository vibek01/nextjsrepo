import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected?: number,
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log('already connected to Database');
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '');

        console.log(db);

        connection.isConnected = db.connections[0].readyState;
        
        console.log('Database Connected Successfully');
        
    } catch(error){

        console.log('Database Connection Failed', error);

        process.exit(1);
    }
}

export default dbConnect;