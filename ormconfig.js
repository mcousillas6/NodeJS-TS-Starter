require('dotenv');

module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": false,
  "logging": true,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/db/migrations/**/*.js"
  ],
  "subscribers": [
    "dist/db/subscribers/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/db/models",
    "migrationsDir": "src/db/migrations",
    "subscribersDir": "src/db/subscribers"
  }
}
