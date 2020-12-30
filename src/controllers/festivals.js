const Festival = require('../models/Festivals')

async function getAllFestivals() {

    let doc = await Festival.find({})

    return doc

}

async function getFestival(festival_id) {

    let doc = await Festival.findOne({_id: festival_id}).catch(err => {

        if (err.message.indexOf('Cast to ObjectId failed') !== -1)
            throw new Error("Festival not found")
        else
            throw new Error(err.message)

    })
    
    return doc
}

async function addFestival(name, year) {

    let festival = {
        "name": name,
        "year": year
    }

    let festivalModel = new Festival(festival)
    let result = await festivalModel.save()

    return result
}

async function editFestival(festival_id, name, year) {

    let doc = await Festival.findById(festival_id).catch(err => {

        if (err.message.indexOf('Cast to ObjectId failed') !== -1)
            throw new Error("Festival not found")
        else
            throw new Error(err.message)

    })

    if(!doc) throw new Error("Festival not found")

    doc.name = name
    doc.year = year

    let result = await doc.save()

    return result

}

module.exports = {
    addFestival,
    editFestival,
    getAllFestivals,
    getFestival
}