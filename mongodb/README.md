# MongoDB for local development

Use this database setup for local development.

## Setup

1. Add `127.0.0.1 mongo-db-express.docker` record in your `/etc/hosts` file

2. Duplicate `.env.mongo.sample` and `.env.mongo-express.sample` files 
   and rename them to `.env.mongo` and `.env.mongo-express` respectively.

3. Configure your environment variables.

   `EXPLORE_API_USERNAME=`

   `EXPLORE_API_PASSWORD=`

   These credentials are used by the explorer api to access the database. Ensure they are updated in the global .env file.

   Do not use `@` in passwords as it will create "URI malformed" error on connection to the DB in Explore API.

4. Run `docker-compose up -d` to initiate and start the database.

5. Open: http://mongo-db-express.docker:8081 in your browser to access MongoDB UI

### Notes

- Scripts from `/setup` folder will run only on initial setup of the database in alphabetical order.
- To reset the database run `docker volume rm explore-api-mongodb-data` - **IT WILL DROP DATABASE**
