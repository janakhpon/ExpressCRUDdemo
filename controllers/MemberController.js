var mongoose = require("mongoose");
var Member = require("../models/Member");

var memberController = {};

// Show list of employees
memberController.list = function(req, res) {
  Member.find({}).exec(function (err, members) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/members/index", {members: members});
    }
  });
};

// Show employee by id
memberController.show = function(req, res) {
  Member.findOne({_id: req.params.id}).exec(function (err, member) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/members/show", {member: member});
    }
  });
};

// Create new employee
memberController.create = function(req, res) {
  res.render("../views/members/create");
};

// Save new employee
memberController.save = function(req, res) {
  var member = new Member(req.body);

  member.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/members/create");
    } else {
      console.log("Successfully created an employee.");
     
    }
  });
};

// Edit an employee
memberController.edit = function(req, res) {
 Member.findOne({_id: req.params.id}).exec(function (err, member) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/members/edit", {member: member});
    }
  });
};

// Update an employee
memberController.update = function(req, res) {
  Member.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, email: req.body.email, bdate: req.body.bdate, experience: req.body.experience, language: req.body.language, rank: req.body.rank, sdate: req.body.sdate, code: req.body.code, phone: req.body.phone}}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/members/edit", {member: req.body});
    }
    
  });
};

// Delete an employee
memberController.delete = function(req, res) {
 Member.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/members");
    }
  });
};

module.exports = memberController;
