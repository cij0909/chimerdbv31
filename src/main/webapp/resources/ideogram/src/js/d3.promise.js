/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// https://github.com/kristw/d3.promise
!function(a,b){"function"==typeof define&&define.amd?define(["d3"],b):"object"==typeof exports?module.exports=b(require("d3")):a.d3.promise=b(a.d3)}(this,function(a){var b=function(){function b(a,b){return function(){var c=Array.prototype.slice.call(arguments);return new Promise(function(d,e){var f=function(a,b){return a?void e(Error(a)):void d(b)};b.apply(a,c.concat(f))})}}var c={};return["csv","tsv","json","xml","text","html"].forEach(function(d){c[d]=b(a,a[d])}),c}();return a.promise=b,b});
