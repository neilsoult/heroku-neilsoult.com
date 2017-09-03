import * as Hapi from 'hapi';
import { apiRoutes } from './apiRoutes';

let server = new Hapi.Server();

server.connection({
    port: +process.env.PORT || 3001,
    router: { stripTrailingSlash: true },
    routes: { cors: true }
});

server.register({
    register: apiRoutes,
    routes: { prefix: '/api' }
}, () => {

    server.start(() => {

        console.log(`Server running at ${server.info.uri}`);

    });

});
