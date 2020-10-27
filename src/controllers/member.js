const Member = require('../models/Member')

async function getMember() {

}

async function addMember(memberOpts) {
    if(!memberOpts.firstName) {
        throw new Error("Did not supply firstName")
    }
    if(!memberOpts.lastName) {
        throw new Error("Did not supply lastName")
    }
    if(!memberOpts.isOwner) {
        throw new Error("Did not supply isOwner")
    }

    const member = {
        firstName: memberOpts.firstName,
        lastName: memberOpts.lastName,
        isOwner: memberOpts.isOwner
    }

    let memberModel = new Member(member)
    await memberModel.save()

    return memberModel
}

module.exports = {
    addMember
}