module.exports = {
    name: 'ed-ping-uptime',
    version: '1.0.0',
    register: async server => {
        server.route({
            method: 'GET',
            path: '/ping',
            config: {
                auth: false
            },
            handler: async function(req) {
                try {
                    const dbError = await req.server.app.db.sequelize.authenticate();
                    if (!dbError) {
                        return 'OK';
                    }
                    throw dbError;
                } catch (e) {
                    throw e;
                }
            }
        });
    }
};
