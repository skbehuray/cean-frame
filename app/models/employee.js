var Apollo = require('apollo-cassandra');

/* Connect to our server cluster */
var connection = {
  "hosts": [
    "localhost"
  ],
  "keyspace": "cean"
};

var apollo = new Apollo(connection);
apollo.connect(function(err) {
  if (err) throw err;
  /* do amazing things! */
});

/* Our employee schema */
var employeeSchema = {
  fields: {
    empid: "int",
    firstname: "text",
    lastname: "text",
    department: "text"
  },
  key: ["empid"]
};

/* Initilize the model */
var employee = apollo.add_model('employee', employeeSchema);

/* Make our model accessible to project files */
module.exports = employee;
