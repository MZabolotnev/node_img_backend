const db = require('_helpers/db');
const File = db.File;

module.exports = {
    getByUserId,
    create
};


async function getByUserId(id) {
    return await File.find({ _id: id }).select('-hash');
}

async function create(fileParam) {
    // validate
    if (await File.findOne({ src: fileParam.src })) {
        throw 'File "' + fileParam.src + '" is already taken';
    }

    const file = new File(fileParam);

    // save user
    await file.save();
}
