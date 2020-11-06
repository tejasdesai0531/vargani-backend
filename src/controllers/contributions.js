const Contribution = require('../models/Contributions')
const mongoose = require('mongoose')

async function addContribution(contributionOpts) {
    if(!contributionOpts.festival_id) {
        throw new Error("Did not supply festival id")
    }
    if(!contributionOpts.room_id) {
        throw new Error("Did not supply room id")
    }
    if(!contributionOpts.amount) {
        throw new Error("Did not supply amount")
    }

    let festival_id = mongoose.Types.ObjectId(contributionOpts.festival_id);
    let room_id = mongoose.Types.ObjectId(contributionOpts.room_id)
    let amount = contributionOpts.amount

    let contribution = {
        "festival_id": festival_id,
        "room_id": room_id,
        "amount": amount
    }

    let contributionModel = new Contribution(contribution)
    await contributionModel.save()

    let response = {
        error: false,
        message: "Contribution added successfully"
    }

    return response

}

module.exports = {
    addContribution
}