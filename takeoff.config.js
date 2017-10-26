let sleep = 'sleep 5';
if (process.platform === 'win32') sleep = 'sleep -s 5';

module.exports = ({ command, shell, args, opts, workingDir, h }) => {
    const bar = new h.progressbar({
        schema: ' :title (:current/:total :elapseds) [:bar]',
        total: 4
    });

    bar.tick(0, { title: 'Doing NPM Install' });

    const submoduleInit = shell.exec(`npm install`, { cwd: __dirname, silent: opts.v ? false : true });
    if (submoduleInit.code !== 0) return false;

    bar.tick(1, { title: 'Bootstrap Environment' });

    const bootstrap = shell.exec(`node_modules/.bin/lerna bootstrap`, {
        cwd: __dirname,
        silent: opts.v ? false : true
    });
    if (bootstrap.code !== 0) return false;

    bar.tick(1, { title: 'Running Docker Build' });

    const build = shell.exec(`docker-compose -f docker/docker-compose.yml build --no-cache`, {
        cwd: __dirname,
        silent: opts.v ? false : true
    });
    if (build.code !== 0) return false;

    bar.tick(1, { title: 'Initilising Database' });

    const dbinit = shell.exec(
        `docker-compose -f docker/docker-compose.yml build --no-cache \
&& docker-compose -f docker/docker-compose.yml up -d db && ${sleep} && docker-compose -f docker/docker-compose.yml stop db`,
        { cwd: __dirname, silent: opts.v ? false : true }
    );
    if (dbinit.code !== 0) return false;

    bar.tick(1, { title: 'Done' });

    return true;
};
