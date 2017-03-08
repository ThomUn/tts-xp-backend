/// <reference path="typings/index.d.ts" />
/**
 * Created by Thomas on 08.03.2017.
 */
import * as Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path:'/hello/{name}',
    handler: function (request, reply) {

        return reply('hefgfdglsdfsdfsdfhlo ' + request.params['name']);
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});