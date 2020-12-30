const Room = require('../models/Rooms')

async function getRoom(roomOpts) {
    if(!roomOpts.roomNumber) {
        throw new Error("Did not supply room number")
    }

    let doc = await Room.findOne({ "roomNumber": roomOpts.roomNumber })

    if(!doc) throw new Error("Room number not found")

    return doc
}

async function addRoom(roomNumber, firstName, lastName, isOwner) {

    const room = {
        roomNumber: roomNumber,
        firstName: firstName,
        lastName: lastName,
        isOwner: isOwner
    }

    let roomModel = new Room(room)
    let result = await roomModel.save()

    return result
}

async function editRoom(roomNumber, firstName, lastName, isOwner) {

    let doc = await Room.findOne({ "roomNumber": roomNumber })
    
    if(!doc) throw new Error("Room number not found")

    doc.firstName = firstName,
    doc.lastName = lastName,
    doc.isOwner = isOwner

    let result = await doc.save()

    return result
}

module.exports = {
    addRoom,
    editRoom,
    getRoom
}