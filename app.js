const express = require("express");
const http = require("http");
const path = require("path");

const indexR = require("./routes/index");
const usersR = require("./routes/users");
const openAiR = require("./routes/openAi");

const app = express();
// let the client send a body json object
app.use(express.json());
// make the public dir to be public to the client side
app.use(express.static(path.join(__dirname,"public")));

app.use("/",indexR);
app.use("/api/users",usersR);
app.use("/api/openai",openAiR);


const server = http.createServer(app);
const port = process.env.PORT || 3001
server.listen(port);
