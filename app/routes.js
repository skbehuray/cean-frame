// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var Employee = require('./models/employee');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/nerds', function(req, res) {
    // use mongoose to get all nerds in the database
    Nerd.find(function(err, nerds) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }
      res.json(nerds); // return all nerds in JSON format
    });
  });

  app.get('/api/employees', function(req, res) {
    // use Apollo to get all employees in the database
    Employee.find({}, function(err, employees) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }
      res.json(employees); // return all nerds in JSON format
    });
  });

  app.get('/api/employee', function(req, res) {
    var emp_id = req.param('id');
    // use Apollo to get all employees in the database
    Employee.find({empid: emp_id}, function(err, employees) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }
      res.json(employees); // return all nerds in JSON format
    });
  });

  app.get('/api/employee/:empid', function(req, res) {
    // use Apollo to get all employees in the database
    Employee.find({empid: req.params.empid}, function(err, employees) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }
      res.json(employees); // return all nerds in JSON format
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });
};
