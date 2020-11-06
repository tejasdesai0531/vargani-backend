const Festival = require('../models/Festivals')

async function getAllFestivals() {

    let doc = await Festival.find({})
    let response = {
        error: false,
        festivals: doc
    }

    return response

}

async function addFestival(festivalOpts) {
    if(!festivalOpts.name) {
        throw new Error("Did not supply festival name")
    }
    if(!festivalOpts.year) {
        throw new Error("Did not supply year")
    }

    let festival = {
        "name": festivalOpts.name,
        "year": festivalOpts.year
    }

    let festivalModel = new Festival(festival)
    await festivalModel.save()

    let response = {
        error: false,
        message: "Festival added successfully"
    }

    return response
}

async function editFestival(festivalOpts) {

    if(!festivalOpts.festival_id) {
        throw new Error("Did not supply festival id")
    }

    if(!festivalOpts.name) {
        throw new Error("Did not supply festival name")
    }

    let doc = await Festival.findById(festivalOpts.festival_id)

    if(!doc) throw new Error("Festival not found")

    doc.name = festivalOpts.name

    await doc.save()

    let response = {
        error: false,
        message: "Festival updated successfully"
    }

    return response

}

module.exports = {
    addFestival,
    editFestival,
    getAllFestivals
}