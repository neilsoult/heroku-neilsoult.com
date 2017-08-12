import * as globby from 'globby';
const globPaths = process.env.API_GLOB_PATHS || ['**/*/routes.js'];

const apiRoutes: any = {
    register: (server, options, next) => {

        let walkThroughRoutes = (path) => {

            let routes = require(process.cwd() + '/' + path);
            Object.keys(routes).forEach((routeName) => {

                try {

                    console.log(`routeName: ${routeName}`);
                    server.route(routes[routeName]);

                } catch (err) {

                    console.log(`route error: ${err}`);

                }

            });

        };

        console.log('-- initializing routes --');

        globby(globPaths)
        .then((paths) => {

            paths.forEach(walkThroughRoutes);
            console.log('-- routes loaded --');
            next();

        });

    }
};

apiRoutes.register.attributes = {
    name: 'API Routes',
    once: true,
    version: '1.0.0'
};

export { apiRoutes };
