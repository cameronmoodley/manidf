var Task = function (name) {
	this.name = name;
	this.completed = false;
}
// take the complete and save function out of the task function and have them as prototype constructor
/*
name.prototype.methodname = function (arguments) {

};
*/
Task.prototype.complete = function () {
	console.log('completing task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function () {
	console.log('Saving task: ' + this.name);
};

// create a new instance of this task
var task1 = new Task('create a demo for constructors')
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singltons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();

// drawbacks
// the functions  is recreated for every task objec that we create a copy of. not iffecient
// rather use 'prototype', encapsulation of properties and methods that a function links back to.
