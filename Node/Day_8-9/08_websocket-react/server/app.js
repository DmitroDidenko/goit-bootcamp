const {PORT = 9988} = process.env;
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server, {
    path: '/chat/',
    origins: "*:*"
});

let online = 0;
io.on('connection', client => {
    client.broadcast.emit("change-online", online);
    client.on("disconnect", () => client.broadcast.emit("change-online", online));
    client.on("message", message => client.broadcast.emit("new-message", message));
    client.on("typing", is => client.broadcast.emit("somebody-typing", is))
});

<<<<<<< HEAD
app.use(express.static('../build'));
server.listen(PORT);
=======

app.use(express.static('../build'));
server.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});
>>>>>>> 0929dd7c19f7ed97daf1b03ae6413876c38b8fb8
