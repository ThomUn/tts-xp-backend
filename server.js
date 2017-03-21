"use strict";
/// <reference path="typings/index.d.ts" />
/**
 * Created by Thomas on 08.03.2017.
 */
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000,
    routes: {
        cors: true
    }
});
server.route([{
        method: 'GET',
        path: '/hello/{name}',
        handler: function (request, reply) {
            var test = {
                "first": "test",
                "name": "" + request.params['name']
            };
            // return reply(JSON.stringify('Hello ' + request.params['name']+ '!'));
            return reply(test);
        }
    },
    {
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            return reply(JSON.stringify('Hello!'));
        }
    }]);
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
