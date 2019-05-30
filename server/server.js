const http = require("http");
const config = require("./api/config/config");
const app = require("./app");
const { sequelize } = require("./api/models");

const server = http.createServer(app);

sequelize.sync({ force: false }).then(() => {
  server.listen(config.port, () => {
    console.log();
    console.log(`CamHouse now listening at port: ${config.port}`);
  });
});
