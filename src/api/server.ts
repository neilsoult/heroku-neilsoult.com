import * as Hapi from 'hapi';
import { apiRoutes } from './apiRoutes';
import { angularApp } from './angularApp';

let server = new Hapi.Server();

server.connection({
    port: +process.env.PORT || 3001,
    router: { stripTrailingSlash: true }
});

server.register({
    register: apiRoutes,
    routes: { prefix: '/api' }
}, () => {

    server.register({ register: angularApp }, () => {

        server.start(() => {

            console.log(`Server running at ${server.info.uri}`);

        });

    });

});
