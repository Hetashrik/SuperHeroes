// connection with mongoDB

import mongoose from "mongoose";

// global var
const connection = {}

// idea being making new folder and write the code to connect database in that folder is whenever I need to connect the database.. I can easily import this file abd can connect the databse in that particular file only
async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    // making sure we are connected to database or not
    const db = await mongoose.connect(process.env.MONGO_URL, {
        // passing properties so that it doesn't give any error 
        useNewUrlParser: true,    //making flag(useNewUrlParser) on 
        useUnifiedTopology: true  //making flag(useUnifiedTopology) on

        // hopefully this above two is going to connect database
    })

    // why we are put this into connection because I know keep on this connection again and again, if my connection is already their I would love to check it first... so checking connection code is written between lines 8 to 10
    connection.isConnected = db.connections[0].readyState

    // in mongoose there is many property available, one of them is readyState
    // readyState gives you
        // 0 - if it is disconnected
        // 1 - if it is connected
        // 2 - if it is connecting
        // 3 - if it is disconnecting
}
export default dbConnect;