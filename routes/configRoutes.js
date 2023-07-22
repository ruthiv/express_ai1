const indexR = require("./index");
const usersR = require("./users");
const openAiR = require("./openAi");




exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/openai",openAiR);


}