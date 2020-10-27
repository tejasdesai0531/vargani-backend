
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

    const createdUser = {
        firstName: memberOpts.firstName,
        lastName: memberOpts.lastName,
        isOwner: memberOpts.isOwner
    }

    return createdUser
}

module.exports = {
    addMember
}