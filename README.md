# cean-frame
A basic MEAN architecture with support for Cassandra and REST WS.

The goal of this project is to utilize Cassandra as the backend with a ODM and build REST based web services on top of it using Node.js and Express.

To start:

1. Set up a basic Cassandra instance and start up the server.
2. Execute the DDL and data load scripts from db/cassandra-schema.ddl and db/insert-employees.cql
3. Execute 'node install' to download dependencies.
4. Start the server by executing 'node server.js'.
5. Browse to 'http://localhost:9090/'.

All routes in app/routes.js will work.
