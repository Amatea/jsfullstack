var moment = require('moment');
var $ = require('jquery');

var a = new Date();
var b = "2015-09-10 21:41:00";
var c = moment(b).add(12, 'M');
var date = c.to(a);

console.log(date);

$(document).ready(function() {
    $('#prueba').html(date);
});