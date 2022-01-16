function start() {
    console.log("/start route handler");
    return "Hello Start";
}

function upload() {
    console.log("/upload route handler");
    return "Hello Upload";
}

exports.start = start
exports.upload = upload