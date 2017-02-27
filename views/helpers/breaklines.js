'use strict';
const HandleBars = require('handlebars');

//console.log(require('handlebars').Utils.escapeExpression);
//console.log(HandleBars2)
module.exports = function(text) {
    text = HandleBars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new HandleBars.SafeString(text);
}