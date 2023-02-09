const mongoose = require('mongoose');

// creating schema and we add many object
const HeroSchema = new mongoose.Schema({
    superHero: {
        type: String,

        // this statement is complusory and going to be true
        required: [true, 'Please name the hero'],
        unique: true,
        trim: true
    },

    realName: {
        type: String,

        // this statement is complusory and going to be true
        required: true,

        // the maxlength of name of heroes should short or atmost 200 char and write the message that Please keep real name short
        maxlength: [200, 'Please keep the real name short']
    }
})

// to export

// if the modal is already created, it not going to create the modal again and again that is it will go and take mongooose.modals.Hero
// if the modals is not created it will create by using mongooose.modals('Hero', HeroSchema)
module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema)