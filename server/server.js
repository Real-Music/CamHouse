const http = require("http");
const config = require("./config/config");
const app = require("./app");
const { sequelize } = require("./models");

const server = http.createServer(app);

sequelize.sync().then(() => {
  server.listen(config.port, () => {
    console.log();
    console.log(`CamHouse now listening at port: ${config.port}`);
  });
});
