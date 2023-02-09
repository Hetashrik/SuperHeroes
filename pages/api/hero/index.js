import dbConnect from '../../../db/dbconnect'     
//  ../ ->one directory back 
// ../ ->one another directory back
//  ../ ->then one another back directory 
//  db/ -> then in db directory
// dbconnect -> then dbconnect file


// need modal itself
import Hero from '../../../modals/Hero'

// connect database
dbConnect()

// responsible for doing things
// i)get all records is done by doing get request
// ii)post new record is done by doing post request
export default async (req, res) => {     //async because maybe we should have to pull some record from database

    // we need to extract what method the request is coming through
    const {method} = req

    switch (method) {

        // to get all record
        // handling GET request
        case 'GET':

        // whenever we make a database request there is a high chance that the request may get failed due to some error or connectivity issue
        // so always to wrapped it up in try catch
            try {
                // fetching the record if the request don't get failed

                // fetching all record we haven't passed any parameter
                // since this is a operation on database it needs to await and hold it in a varible hero
               const heroes = await Hero.find({})
                // have grab all the information by writing above line so just throw them out

                // throwing them out
                res.status(200).json({success: true, hero: heroes})   //send all the heroes
            } catch (error) {
                // if get error
                // just raise the response status of 400 as we have done something wrong probably and just send a json response that going to say success is false and we can also send some msg that something is wrong
                res.status(400).json({success: false})
            }
            break;



        // to post/add record/data
        // handling POST request
        case 'POST':
            try {

                // everything is going to be same but someone is posting some data so we need to attempt to create new data
               const hero = await Hero.create(req.body)  //this new will coming up into the body
                res.status(200).json({success: true, hero: hero})   
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    
        default:
            res.status(400).json({success: false})
            break;
    }
}  