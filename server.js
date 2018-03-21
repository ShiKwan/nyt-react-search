const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3001;
/* 
server.listen(8000); */


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/articlelist",
  {
    useMongoClient: true
  }
);


/* 

 */

/* const port = 8000; */
/* io.listen(PORT);
console.log('listening on port ', PORT);
 */
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket =>{
  socket.on("articleSaved", data =>{
    socket.broadcast.emit("alertEveryone", `${data.user} said : "${data.title}!"`);
  })
});
 // Start the API server
server.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`););

