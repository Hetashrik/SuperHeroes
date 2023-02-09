// whenever we need to capture any parameter from url or pass on any unique id, this is how Next.js automatically capture that id and gives to us

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

// get a unique record,
// handle edit
// handle delete

// create a method for above operation
export default async (req, res) => {
    const {

        // query gives access to id
        query: { id },

        // access to method
        method
    } = req

    switch (method) {
        case 'GET':

            // this time the GET record, somebody comes up with a unique id so I want to give back unique record so for that I have to Hero
            try {
                const hero = await Hero.findById(id)
                if (!hero) {   // or if(hero == undefined)

                    // this is a unique record so have to send the data back so for that we write , hero: hero
                    // but something the hero throw an error so for that we will put if statement
                    res.status(400).json({ success: false })
                }
                // if don't get error then it will come here and say send us a response of 200 , the success is true and the hero is hero
                res.status(200).json({ success: true, hero: hero })

            } catch (error) {
                res.status(400).json({ success: false })

            }

            break;


        // if someone puts a PUT request i.e; somebody wants to update some record
        case 'PUT':
            try {
                const hero = await Hero.findByIdAndUpdate(id, req.body, {

                    // pass on some options

                    //new will give hero back that is give back updated record
                    new: true,
                    runValidators: true
                })
                if (!hero) {
                    res.status(400).json({ success: false })
                }

                // update record back
                res.status(200).json({ success: true, hero: hero })

            } catch (error) {
                res.status(400).json({ success: false })

            }

            break;


        // if someone want to delete
        case 'DELETE':
            try {
                const hero = await Hero.deleteOne({_id: id})
                if (!hero) {
                    res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, hero: hero })

            } catch (error) {
                res.status(400).json({ success: false })

            }

            break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}