//var jQueryy = require('jquery');
//var monnents = require('moment');
var Util = require('./utils');
import {div as chia,sum} from './common';
import testExport from './default';


console.log(testExport());
console.log(Util(15,8));
console.log(chia(10, 0));
console.log(chia(10, 2));

console.log(sum(10, 1));

// jQueryy(document).ready(function(){
//     jQueryy('.content').css('color', 'cyan');
// })