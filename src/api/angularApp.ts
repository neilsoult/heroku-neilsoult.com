import * as globby from 'globby';
import * as inert from 'inert';
const globPaths = process.env.ANGULAR_GLOB_PATHS || ['dist/app/**/*'];

const angularApp: any = {
    register: (server, options, next) => {

        console.log('starting angularApp plugin');
        server.register(inert, (err) => {

            if (err) {

                throw err;

            }

            console.log('routing index file', `${__dirname}/app/index.html`);
            server.route({
                config: {
                    handler: { file: `${__dirname}/app/index.html` }
                },
                method: ['GET'],
                path: '/'
            });

            // console.log('appRoutes', appRoutes);
             globby(globPaths)
            .then((paths) => {

                // console.log('angular paths', paths);
                paths.map((path) => {

                    path = path.split('dist/app')[1];
                    console.log('mapping: ', `${__dirname}/app${path} to ${path}`);
                    server.route({
                        config: {
                            handler: { file: `${__dirname}/app${path}` }
                        },
                        method: ['GET'],
                        path
                    });

                });

                server.route({
                    handler: function (req, reply) {

                        reply.file(`${__dirname}/app/index.html`);
                        /*let reg = /(\.js)|(\.css)|(\.png)|(\.jpg)|(\.jpeg)|(\.eot)|(\.woff)|(\.ttf)|(\.eot)|(\.svg)/;
                        if(req.params.files && reg.test(req.params.files)) {

                            reply.file(req.params.files);

                        }
                        else{

                            reply.file(`${__dirname}/app/index.html`);

                        }*/

                    },
                    method: ['GET'],
                    path: '/{files*}'
                });

                next();

            });

        });

    }
};

angularApp.register.attributes = {
    name: 'Angular App',
    once: true,
    version: '1.0.0'
};

export { angularApp };
