DROP keyspace IF EXISTS cean;


CREATE keyspace cean WITH replication = {'class':'SimpleStrategy',
                                                 'replication_factor':1};

 USE cean;


CREATE TABLE employee (empid int PRIMARY KEY, firstname varchar, lastname varchar, department varchar);
