/// <reference path="typings/index.d.ts" />
/**
 * Created by Thomas on 08.03.2017.
 */
import * as Hapi from 'hapi';
import {Color} from './pojo/Color';

const server = new Hapi.Server();
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
        }
        // return reply(JSON.stringify('Hello ' + request.params['name']+ '!'));
        return reply(test);
    }
},
    {
        method: 'GET',
        path: '/toHEX/{red}/{green}/{blue}',
        handler: function (request, reply) {
            let newColor = new Color(parseInt(request.params.red), parseInt(request.params.green), parseInt(request.params.blue));
            return reply(JSON.stringify(newColor.getHEX()));
        }
    }]);


server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});