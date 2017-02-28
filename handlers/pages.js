'use strict';

const Wreck = require('wreck');

module.exports.home = function (req, reply) {
    Wreck.get(this.apiBaseUrl + '/recipes', {json: true}, (err, res, payload) => {
        if (err) {
            throw err;
        }
        reply.view('index', {
            recipes: payload,
            user: req.auth.credentials
        })
    })
};

module.exports.viewRecipe = function (req, reply) {
    console.log('view recipe');
    Wreck.get(this.apiBaseUrl + '/recipes/' + req.params.id, {json: true}, (err, res, payload) => {
        if (err) {
            throw err;
        }
        reply.view('recipe', {recipe: payload});
    })
}

module.exports.login = function (req, reply) {
    reply.view('login');
}

module.exports.createRecipe = function (req, reply) {
    reply.view('create', {
        user: req.auth.credentials
    })
}