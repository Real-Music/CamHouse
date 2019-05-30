module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || "camhouse",
    user: process.env.DB_USER || "raymond",
    password: process.env.DB_PASS || "12345",
    options: {
      host: process.env.HOST || "localhost",
      dialect: process.env.DIALECT || "postgres"
    }
  },
  jwt: {
    ONE_WEEK: 60 * 60 * 24 * 7,
    JWT_SECRET:
      process.env.JWT_SECRET || "fuieyirubvbxcvoyeoprypweoir#2%^%&^&^*uop"
  }
};
