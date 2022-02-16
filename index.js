const server = require("./server")
const router = require("./router")
const requestHandler = require("./requestHandler")

const handle = {}

handle["/"] = requestHandler.start
handle["/start"] = requestHandler.start
handle["/upload"] = requestHandler.upload
handle["/show"] = requestHandler.show

server.start(handle, router.route)