var moment = require('moment');

// var date = new Date();

// var date = moment();

// console.log(date.format('h:mm a'));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);