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
        method: 'POST',
        path: '/ledlight/{LEDNUMBER}{ROOM}/{HEX_CODE}',
        handler: function (request, reply) {
            // Verbindungsaufbau zum Home-Automation-System
            // Finden und Auswahl der richten LED
            // Setzen der gewünschten Farbe
            return reply(JSON.stringify('Die LED ' + request.params.LEDNUMBER
                + ' im Raum ' + request.params.ROOM
                + ' zeigt nun erfolgreich die Farbe ' + request.params.HEX_CODE + '!'));
        }
}]);


server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});