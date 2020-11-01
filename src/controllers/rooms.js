const Room = require('../models/Rooms')

async function getRoom(roomOpts) {
    if(!roomOpts.roomNumber) {
        throw new Error("Did not supply room number")
    }

    let doc = await Room.findOne({ "roomNumber": roomOpts.roomNumber })

    if(!doc) throw new Error("Room number not found")

    let response = {
        error: false,
        roomDetails: doc
    }

    return response
}

async function addRoom(roomOpts) {
    if(!roomOpts.roomNumber) {
        throw new Error("Did not supply room number")
    }
    if(!roomOpts.firstName) {
        throw new Error("Did not supply firstName")
    }
    if(!roomOpts.lastName) {
        throw new Error("Did not supply lastName")
    }
    if(!roomOpts.isOwner) {
        throw new Error("Did not supply isOwner")
    }

    const room = {
        roomNumber: roomOpts.roomNumber,
        firstName: roomOpts.firstName,
        lastName: roomOpts.lastName,
        isOwner: roomOpts.isOwner
    }

    let roomModel = new Room(room)
    await roomModel.save()

    let response = {
        error: false,
        message: "Room created successfully"
    }

    return response
}

async function editRoom(roomOpts) {
    if(!roomOpts.roomNumber) {
        throw new Error("Did not supply room number")
    }
    if(!roomOpts.firstName) {
        throw new Error("Did not supply firstName")
    }
    if(!roomOpts.lastName) {
        throw new Error("Did not supply lastName")
    }
    if(!roomOpts.isOwner) {
        throw new Error("Did not supply isOwner")
    }

    let doc = await Room.findOne({ "roomNumber": roomOpts.roomNumber })
    
    if(!doc) throw new Error("Room number not found")

    doc.firstName = roomOpts.firstName,
    doc.lastName = roomOpts.lastName,
    doc.isOwner = roomOpts.isOwner

    await doc.save()

    let response = {
        error: false,
        message: "Room updated successfully"
    }

    return response
}

module.exports = {
    addRoom,
    editRoom,
    getRoom
}