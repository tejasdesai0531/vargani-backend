const Contribution = require('../models/Contributions')
const { getFestival } = require('../controllers/festivals');
const mongoose = require('mongoose')

async function addContribution(festival_id, room_id, amount) {

    let contribution = {
        "festival_id": festival_id,
        "room_id": room_id,
        "amount": amount
    }

    let festival = await getFestival(festival_id)
    if(!festival) throw new Error("Festival Id not found")

    let contributionModel = new Contribution(contribution)
    let result = await contributionModel.save()

    return result

}

module.exports = {
    addContribution
}