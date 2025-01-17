const mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Department: String,
    Salary: Number
})

var EmployeeModel = mongoose.model("emp", schema)
module.exports = EmployeeModel;//exporting the model